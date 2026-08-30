# Only Automation — Application & Architecture Overview

> Monorepo: `/home/vanex/Desktop/PROJECTS/only-automation`
> What the product does, the full tech stack, and the frontend + backend architecture across all services.
> Last mapped: **2026‑08‑30** (desktop app `only-automation@3.1.13`).

---

## 1. What the product is

**Only Automation** (internally also "Vault Uploader") is a cross‑platform **desktop application + backend platform** that automates day‑to‑day operation of OnlyFans (and Fansly) creator accounts for agencies/chatters:

- **Messaging at scale** — "Messages Pro" multi‑creator inbox, AI‑drafted replies (Grok), mass/bulk DMs, PPV, online‑fans outreach.
- **Vault automation** — archive media to a creator's OF Vault without publishing, scan & sync bundles, download vault content to S3.
- **Metrics & analytics** — revenue, subscribers, tracking/trial links, creator reports, conversion + content performance, insights.
- **Account operations** — connect OF/Fansly accounts through an anti‑detect browser, keep one consistent session + IP per creator 24/7, per‑account AI "manager" agents, shift/QA monitoring.
- **Billing & distribution** — Stripe subscriptions, app download + OTA update policy (optional vs mandatory).

The hard problem the architecture solves: **operate a single OnlyFans session from many devices without OnlyFans detecting a second device** (which triggers org‑wide signout). That drives the "one live headless browser per creator is the source of truth" design (§6), and the newer rule that **no service calls onlyfans.com directly** — everything funnels through `of-session-service`.

> ⚠️ The checked‑in root `CLAUDE.md` is partly **stale**: it says Firebase Auth/Firestore and a `desktop-app/` Electron dir. Reality: auth is **custom JWT over DynamoDB** (no Firebase), and the active desktop app is **`desktop-updated/`** (`desktop-app/` is legacy).

---

## 2. Tech stack

| Layer | Technology |
|---|---|
| **Desktop app** | Electron (main + preload + renderer), `electron-vite`, `electron-store`, `electron-updater` |
| **Frontend UI** | React 19, Vite, TypeScript, Tailwind CSS v4, TanStack Query v5 / Store / Virtual / Form, `radix-ui` + shadcn, `recharts`, `@xyflow/react` (workflow canvas), `sonner`, `lucide-react` + Iconify; custom page router (no react‑router) |
| **Browser automation** | Playwright + **Camoufox** via **cloakbrowser** (anti‑detect/stealth), deterministic per‑account fingerprint |
| **Primary backend** | **Flask** (Python, gunicorn WSGI) — `desktop-api` |
| **OF data/polling backend (new)** | **FastAPI + Celery + SQLAlchemy 2 async** — `of-api`, on **Supabase Postgres** |
| **AI microservice** | **FastAPI** (uvicorn) — `grok-service`, provider **xAI Grok** (`xai_sdk`); secondary Gemini |
| **Session/gateway microservice** | **Express** (TypeScript, Node ≥20) — `of-session-service` + a **Go TLS sidecar** |
| **Billing/control backend** | **NestJS** (TypeScript) — `onlyautomation-backend` |
| **Datastores** | **AWS DynamoDB** (`ap-southeast-1`) + **S3** (media/app binaries) + **Redis** (caches, locks, queues, pub/sub); **Supabase Postgres** for `of-api` (schema `ofapi`) |
| **Auth** | Custom **JWT (HS256)**, shared `JWT_SECRET_KEY`; user ids `usr_<hex>` in DynamoDB `Users`. `of-api` adds **`ofa_…` API keys** (Argon2id) |
| **Payments** | Stripe (NestJS backend) |
| **OF/proxy egress** | Locally **signed** OF `/api2/v2` requests (`curl_cffi`), **Decodo** residential proxies, one pinned IP per creator |
| **Deployment** | **Render** (Docker) for all backend services; AWS DynamoDB/S3; Supabase Postgres |
| **CI/Release** | GitHub Actions — staging/prod desktop builds, QA gate, release‑notes gate, auto version bump + promotion tag |
| **Landing/website** | Static site + Firebase Hosting (`onlyautomation-io-landing-page/`, `html-files/`, `firebase/`) |

---

## 3. Repository layout (top level)

```
only-automation/
├── desktop-updated/            # ACTIVE Electron desktop app (main/preload/renderer)
├── desktop-app/                # legacy Electron app (ignore)
├── desktop-api/                # PRIMARY backend — Flask (OF ops, metrics, vault, auth)
├── of-api/                     # NEW — FastAPI/Celery OF polling authority on Supabase Postgres
├── of-session-service/         # TS/Express — headless OF session + gateway (+ Go TLS sidecar)
├── grok-service/               # FastAPI — Grok AI draft/caption generation
├── onlyautomation-backend/     # NestJS — auth + Stripe billing + app downloads + account lists
├── release-admin/              # React/Vite OTA release admin (publish version + notes)
├── onlyautomation-io-landing-page/ , html-files/ , firebase/   # website/hosting
├── .github/workflows/          # build, release, QA gates
├── docs/ , plans/ , scripts/ , artefacts/ , Makefile
```

Five backend services, all deploying to **Render** (each has `render.yaml` + `Dockerfile`). `desktop-api`, `grok-service`, `of-session-service` share **DynamoDB** and the **`JWT_SECRET_KEY`**; `of-api` is the one service on Postgres.

---

## 4. Desktop app architecture (`desktop-updated/`)

Electron, three layers.

### 4.1 Main process — `electron/main/`
Node/TypeScript. Owns all privileged work: OF/Fansly API calls, session bridging, proxies, polling, posting, vault, DynamoDB/S3 access.

| Dir | Responsibility |
|---|---|
| `api/` | `directApiClient.ts` (signs + calls OF `/api2/v2`, or routes via backend gateway), `ofApiService.ts` (circuit breaker + in‑flight coalescing) |
| `onlyfans/` | Chat poller, chat store, online‑fans, notifications, fan profile/facts, browser manager, popout manager, session sync, fingerprint |
| `fansly/` | Fansly‑platform equivalents (multi‑platform app) |
| `accountManager/` , `account/` | Job executor (mass message / PPV dispatch), account manager, userId mapping |
| `polling/` | `metricsPoller.ts` (subscribers/earnings/charts recon), forwarders to backend |
| `posting/` , `media/` | PPV/wall/story executors, hidden‑window posting, media uploader, `ffmpeg-static` transcode |
| `session/` , `proxy/` , `realtime/` | Session‑proxy service, backend tunnel relay (`beTunnelRelay.ts`), local proxy, OF realtime socket |
| `vault/` , `vaultPro/` , `vaultAutomation.ts` | Vault upload/download automation, Vault Pro grid + S3 media |
| `auth/` , `updater/` | Client JWT refresh + token store; OTA update policy (optional/mandatory modal) |
| `security/` , `sensitiveWords/` , `memory/` , `perf/` , `diagnostics/` | Encryption, word filtering, fan memory, perf + diagnostics instrumentation |
| `*Overlay.ts` (root files) | Native overlays drawn over the OF webview (rail header, composer, sidebar flyout, toasts) — the OF chat UI is a **native webview, not React** |

### 4.2 Preload — `electron/preload/`
Context‑isolated bridge. `bridge.ts` exposes `window.electronAPI.*` (typed in `src/types/electron.d.ts`). `fetch-interceptor.ts` taps every `onlyfans.com/api2/v2` fetch/XHR inside the OF webview and forwards it to main (`of:api-response`) for session‑header capture + metrics ingest.

### 4.3 Renderer — `src/`
React 19 + Vite. **No react‑router** — navigation is app‑state driven (`currentPage` + per‑platform active view; a single reconcile path keeps webview ↔ app state in sync). State = **TanStack Query** (server cache, persisted) + **TanStack Store** (browser/shift/settings stores).

Pages (`src/pages/`): dashboard/overview, analytics, conversion + content performance, tips, tracking & trial links, models/creators, account‑manager, analyst, chatter‑configurator, organization, promo, s4s, shift‑manager, smart‑lists, QA, reports, settings, sensitive words, help center, plus `onlyfans/` and `fansly/` shells and the vault surfaces (`VaultProPage`, `VaultBrowserPage`, `VaultUploadPage`, `vault-automation/`, `vault-downloader/`).

**Example feature — Messages Pro / Online fans** (`src/pages/onlyfans/messages-pro/`): a pop‑out window embedding OF's native chat webview per creator with custom overlays. The **Online fans** overlay enumerates active subscribers (`subscriptions/subscribers`), hydrates live presence via `users/list?t[]=`, and streams results for bulk outreach.

---

## 5. Backend services

### 5.1 `desktop-api/` — primary backend (Flask)
- **Entry:** `wsgi.py` → `app/__init__.py:create_app()` (gunicorn). ~80 **blueprints** from `modules/<m>/interface/*router*.py`. APScheduler for weekly reports.
- **Middleware** (`app/middleware/`): dual **auth** (JWT header/cookie → `g.current_user`, or `X‑API‑Key` machine context), CORS, errors, rate‑limit.
- **Data:** DynamoDB via `shared/database/dynamodb_service.py` (~40 repository mixins). Tables: `Users`, `RefreshTokens`, `OfCreatorAccounts`, `OfMetricsSnapshots`, `OfSubscribers`, `VaultBundles`/`VaultBundleFiles`, `Organizations`/`OrganizationMembers`, `Agents`, `ModelAssignments`, `SfsCampaigns`, `AppReleases`, … + **S3** + **Redis**.
- **Modules:** `onlyfans` (core — accounts, chat/inbox, grok drafts, tips, shifts, fan facts/insights, bundles, PPV, mass‑message, posts, proxy), `fansly`, `account_manager` (per‑account AI agents), `metrics`, `analytics`, `analyst`, `vault`/`vault_automation`/`vault_downloader`/`vault_media_meta`, `auth` (orgs/members/roles), `chatter_configurator` ("Claire"), `vivian` (vault‑manager agent), `promo`, `s4s`, `chargebacks`, `releases`, `qa`, `diagnostics`, `alerts`.
- **Talks to OnlyFans** (`shared/of/`): signs locally (`signer.py` + `dynamic_rules.py`), executes via `curl_cffi` (`of_api_client.py`); **or** forwards to the session service (`session_service_client.py` → `POST /session/:id/of-call`) when the gateway is enabled. `of_runtime.py` guards that only the `OF_PRIMARY_ENABLED` instance egresses OF calls.

### 5.2 `of-session-service/` — OF session microservice + gateway (Express/TS + Go sidecar)
**Source of truth for each OF session.** Runs **one live cloakbrowser (Playwright + Camoufox) context per creator, 24/7**, seeded from a desktop‑minted session blob, and proxies **all** OF traffic through it so OnlyFans only ever sees one device / fingerprint / IP.
- **Entry:** `src/server.ts`. Routes: `/healthz`, `/session/:id/status|adopt|release|acquire-live|suspend`, `POST /session/:id/of-call` (gateway), `reauth*`.
- **Modules:** `sessionManager.ts` (warm context + DynamoDB **ownership lease**), `tunnelServer.ts` (WSS byte‑pipe data plane → Go TLS sidecar), `proxyRoutes.ts` (per‑account MITM bind control plane), `ofGateway.ts` + `ofSigner.ts` (server‑signed OF calls), `fingerprint.ts` (deterministic seed), `headlessLogin.ts` (Turnstile/2FA re‑login), `mintQueue.ts`, `lease.ts`, `composition/syncServer.ts`.
- **Auth:** JWT `Bearer` for clients; `X‑Internal‑Token` for s2s.
- **Model:** interactive **mint stays on the desktop** (login + fingerprint seed → uploads blob); the service **adopts** it headless with the identical seed + the creator's pinned **Decodo** proxy. The chatter's Electron webview is proxied through a local relay → WSS tunnel → sidecar, so live browsing shares the one identity.

### 5.3 `of-api/` — OnlyFans data authority (FastAPI + Celery + Supabase Postgres) — **new, in build**
Purpose: take OF polling off every chatter's laptop. Today `desktop-updated` polls from every machine (chat list 5s, messages 60s, metrics 5/15/60min, vault hourly) — polling dies when the app closes and N devices multiply OF egress. `of-api` polls **once per creator**, stores in Postgres, serves a versioned REST API (OFAPI‑style envelope `{data, _pagination, _meta}`) with webhooks/WS for push.

```
desktop app / 3rd parties   (Bearer ofa_… API keys)
        │ REST + WS/SSE
        ▼
   of-api :  api (uvicorn app.main:app) │ worker (celery) │ poller (leased, one owner per creator)
        │ Supabase Postgres = source of truth      │ Redis (locks, cache, queue, pub/sub)
        ▼
   of-session-service  POST /session/{id}/of-call   ← the ONLY path to OnlyFans
        ▼
   onlyfans.com /api2/v2
```
- **Layout:** `app/core` (config, Argon2id + Fernet security, permissions), `app/api/routes` (`health`, `auth`, `accounts`, `internal`), `app/modules/accounts`, `app/database/models` (`accounts`, `ops`, `tenancy`), `app/integrations` (`of_client.py`, `of_gateway_driver.py`), `app/services` (redis, keys, distributed lock), `workers/` (`celery_app`, `tasks/{webhooks,maintenance}`, `pollers/{manager,base,registry,profile}`), `migrations/` (alembic).
- **Supabase:** own schema `ofapi` (never `public`, so nothing is exposed through the Data API), RLS on with no policies as defense in depth; service connects with the DB role. `DB_POOLER_MODE` = `session` (default, IPv4 long‑lived) / `direct` (migrations) / `transaction` (never for alembic).
- **Session contract:** Postgres becomes the source of truth for sessions — it exposes the desktop‑api‑compatible `/api/onlyfans/internal/*` surface (`live-list`, `inject-headers`, `live-session`, `session-rev`, `session/cookies`, `session-status`, `credentials`, `mint-context`, `authorize`), so pointing `of-session-service`'s `DESKTOP_API_URL` here migrates it with no other change.
- **Status:** phases 0–2 done (skeleton, auth/tenancy, account+session registry, gateway client, internal contract, poller supervisor + first `profile` poller). Chat, fans, statistics, tracking, vault, posting, webhooks, realtime land later.

### 5.4 `grok-service/` — AI draft generation (FastAPI + xAI Grok)
- **Entry:** `grok_service_app/asgi.py`. Routes: `/healthz`, `POST /grok/draft` (client JWT, cache‑first, SSE), `POST /grok/precompute` + `/grok/warm` (s2s internal token).
- Reuses `desktop-api`'s `modules/onlyfans/application/grok_service.draft_reply()` verbatim (Docker context = repo root, desktop‑api on `PYTHONPATH`) so prompt hashes match and Redis cache hits are automatic.
- **Provider:** xAI Grok (`xai_sdk`, `XAI_API_KEY`, `GROK_MODEL`). Global/per‑account concurrency governor + Redis dedup lock; shares `draft_cache` Redis with desktop‑api. Precompute fires on fan‑message arrival so "Generate reply" serves warm in ms.

### 5.5 `onlyautomation-backend/` — control/billing backend (NestJS)
Handles **auth + Stripe billing + app distribution + account listing** (not a fork of OF logic).
- **Entry:** `src/main.ts` (helmet, cookie‑parser, ValidationPipe, ThrottlerGuard). Modules: `Auth` (register/login/refresh/logout — `@nestjs/jwt` + passport + bcrypt), `Checkout`/`Subscriptions`/`Payments`/`Webhooks` (**Stripe**), `Downloads` (app binary, S3 presigned), `ModelAccounts` (`GET onlyfans|fansly/accounts`, reauth‑lock), `Features`, `Permissions`, `VaultMediaMeta`, `Dynamo`.
- **Stores:** DynamoDB + S3 (`ap-southeast-1`). Own JWT env pair `JWT_SECRET`/`JWT_REFRESH_SECRET` (distinct from Flask's `JWT_SECRET_KEY`). Email via `resend`.

### 5.6 `release-admin/` — OTA release console (React 19 + Vite)
Small internal app to publish app version + release notes (markdown) driving the two‑tier optional/mandatory update modal. Backed by desktop‑api `modules/releases` + DynamoDB `AppReleases`.

---

## 6. End‑to‑end data flow

```
                        Electron desktop app (desktop-updated)
                                     │
   ┌─────────────────────────────────┼───────────────────────────────────────────┐
   │ HTTPS + platform JWT (usr_…)     │ webview setProxy → local relay → WSS tunnel │ JWT / Stripe
   ▼                                  ▼                                            ▼
desktop-api (Flask)          of-session-service (Express/TS)              onlyautomation-backend (NestJS)
• OF ops, metrics, vault      • 24/7 cloakbrowser per creator = truth        • auth, Stripe billing
• DynamoDB / S3 / Redis       • tunnelServer → Go TLS sidecar:               • app downloads (S3)
• signs OF: shared/of/signer      one central session, chrome JA3,           • account lists
  → curl_cffi                     pinned Decodo IP → OnlyFans
• IF gateway on →             • of-call gateway (server-signed OF)
  POST /session/:id/of-call            ▲        ▲
• on fan msg →                         │        │ POST /session/{id}/of-call
  POST grok-service/precompute         │        │
   │                                   │   of-api (FastAPI + Celery + pollers)
   ▼                                   │   • polls once per creator (leased)
grok-service (FastAPI) → xAI Grok      │   • Supabase Postgres = OF data truth
  [reply/caption drafts, warm cache]   │   • REST/WS + ofa_… API keys, webhooks
                                       └── desktop-api fetches Decodo proxy + inject headers

  desktop-api / grok-service / of-session-service ──► DynamoDB (ap-southeast-1) + S3 + Redis
  of-api ──► Supabase Postgres (schema ofapi) + Redis
  Shared JWT_SECRET_KEY across desktop-api / grok-service / of-session-service
```

**Where key things happen**
- **OF request signing:** mirrored in `desktop-api/shared/of/signer.py` (curl_cffi path) and `of-session-service/src/ofSigner.ts` (gateway path) — both ported from the desktop's `directApiClient.ts`.
- **Residential proxies (Decodo):** minted/stored by desktop‑api, egressed by of‑session‑service's Go sidecar — one pinned IP per creator. Vault CDN downloads must reuse the same sticky IP + a warmed tunnel or CloudFront 403s.
- **AI generation:** grok‑service (xAI Grok) reusing desktop‑api's `draft_reply`; secondary AI (`grok_vision`, `gemini`, `xai_voice_agent`) in `desktop-api/shared/ai/`.
- **Single‑caller guarantee:** of‑session‑service holds a DynamoDB **lease** per account and runs as a single pinned Render instance; desktop‑api's `OF_PRIMARY_ENABLED` gates duplicate egress; `of-api`'s poller replicas only poll creators whose `poller_state` lease they hold. Together: OnlyFans never sees two live devices on one session.

---

## 7. Deployment & environments

- **Render** (Docker), region Singapore (`ap-southeast-1`):
  - `desktop-api` — web (starter, autoscale 1–5), health `/api/health`; + cron `creator-info-backfill` (`*/2 * * * *`).
  - `of-session-service` — web (standard, **single pinned instance** — lease owner), health `/healthz`.
  - `grok-service` — web (autoscale 1–5), health `/healthz`, build context = repo root; local `docker-compose.yml` (redis + replicas + nginx).
  - `onlyautomation-backend` — web (starter), health `/`.
  - `of-api` — **three services on one image**: `web` (FastAPI, autoscale 1–3, health `/healthz`), `worker` (celery), `poller` (leased continuous polling).
- **Data:** AWS DynamoDB + S3; Supabase Postgres (of-api); Redis (`REDIS_URL`) everywhere.
- **Website:** Firebase Hosting.

### CI / release pipeline (`.github/workflows/`)
| Workflow | Role |
|---|---|
| `desktop-staging.yml` | builds + signs + notarizes Electron from non‑prod branches; modes `artifacts` (default) or `beta` prerelease w/ `beta*.yml` OTA manifests |
| `desktop-staging-skip.yml` | skip‑shim so path‑filtered required checks don't hang backend‑only PRs |
| `qa-gate.yml` | blocks `staging → main` unless **every** PR merged into staging since main carries `qa-approved` |
| `qa-reject-revert.yml` | `qa-rejected` on a merged staging PR opens a revert PR so staging self‑heals |
| `release-notes-gate.yml` | blocks a promotion that ships no release notes |
| `release-prep.yml` | puts the version bump inside the promotion PR — merging main *is* the release decision |
| `promotion-tag.yml` | tags `main` on promotion merge (version read from `desktop-updated/package.json`) |
| `desktop-release.yml` | builds prod on `v*` tags, publishes GitHub Release + OTA manifest, announces prod OTA |
| `of-api.yml` | of-api lint/type/test on push+PR (Postgres 16 + Redis 7 service containers) |

---

## 8. Cross‑cutting notes

- **Auth model:** HS256 JWTs on register/login/refresh; user ids `usr_<hex>` in DynamoDB `Users`, refresh tokens in `RefreshTokens`. desktop‑api accepts JWT **or** `X‑API‑Key` (machine). onlyautomation‑backend has its own JWT pair. `of-api` uses org‑scoped `ofa_…` API keys (Argon2id hashed, Fernet‑encrypted secrets).
- **Multi‑platform:** desktop app and desktop‑api both carry parallel **Fansly** implementations alongside OnlyFans.
- **Organizations/roles:** DynamoDB `Organizations`/`OrganizationMembers` + custom roles; agents/shift/QA monitoring on top.
- **AI agents** (persona wrappers over Grok): `vivian` (vault manager), `chatter_configurator`/"Claire" (org prompts), `analyst`, plus per‑account `account_manager` policy/strategy/workflow/report agents.
- **Engineering rules that shape the code** (root `CLAUDE.md`, mandatory):
  1. **Feature flags default ON** — `env !== '0'` (kill switch), never `=== '1'`; each flag names an owner + decide‑by date. A flag shipped OFF is a change that never landed.
  2. **Resource lifecycle** — the app runs 8h+ shifts, so every timer/socket/listener/view/Map needs paired teardown, idempotent start, and bounded memory (cap or TTL), including react‑query `gcTime`.
  3. **Protected code** — the Messages Pro refresh‑button spin and arrow‑key creator‑tab switching are frozen; don't touch without an explicit instruction.

---

*Sources: repo scan of `desktop-updated/`, `desktop-api/`, `of-api/`, `of-session-service/`, `grok-service/`, `onlyautomation-backend/`, `release-admin/`; service READMEs, `render.yaml`s, `.github/workflows/`. Framework facts verified from entry points (`wsgi.py`, `src/server.ts`, `app/main.py`, `grok_service_app/asgi.py`, `src/main.ts`).*
