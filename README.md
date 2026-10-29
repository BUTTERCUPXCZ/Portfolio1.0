# Portfolio — Ivan Eltagonde

Single-page developer portfolio. "Sticker sheet" design: a black poster band with a
giant condensed Archivo headline, cream grid-paper panels, and colourful printed
stickers (from `stickers` in `src/data/profile.js`) around a giant "Hello, my name
is" name tag. Dark by default, with an inverted light theme and a print stylesheet that
turns the page into a CV.

## Stack

| | |
|---|---|
| Framework | React 19 |
| Build | Vite 8 (Rolldown) |
| Styling | Tailwind CSS 4 (CSS-first `@theme`) |
| Lint | ESLint 9 flat config |

No animation library: the hero diagram uses SVG/SMIL and CSS keyframes.

## Scripts

```sh
npm run dev       # dev server
npm run check     # validate src/data/profile.js (also runs before build)
npm run build     # production build -> dist/
npm run preview   # serve the production build
npm run lint      # eslint
npm run analyze   # build + rollup-plugin-visualizer treemap
npm run icons     # regenerate src/data/icons.js from simple-icons
npm run portrait  # rebuild src/assets/portrait.jpg from a source photo
```

## Editing content

Every word, link and fact lives in `src/data/profile.js`; the header comment there
explains how to edit it. `src/data/derived.js` computes everything else from it, and
the SEO head (title, Open Graph, JSON-LD) is generated from it at build time by
`seoHead()` in `vite.config.js`.

## Layout

```
index.html                 # theme stamp before first paint, font preloads
public/fonts/              # self-hosted variable woff2 (Archivo, JetBrains Mono)
src/
  index.css                # tokens (OKLCH, light + dark), type scale, print CV
  components/
    Shell.jsx              # page composition, scroll spy, clock
    Header.jsx             # sticky header: name, section nav, CV, theme toggle
    Section.jsx            # shared section frame with a poster-size heading
    NameTag.jsx            # hero centrepiece name-tag sticker
    ProjectGlyphs.jsx      # drawings for private projects
    Sticker.jsx            # circle / tag / badge stickers
    Icon.jsx               # hand-authored 1.5px stroke icon set
    Metric.jsx             # bolds figures (60%, 10+) inside prose
    ThemeToggle.jsx
  views/                   # Hero, About, Work, Experience, Stack, Contact
  hooks/                   # useScrollSpy, useTheme, useClock
  data/                    # profile.js, derived.js, icons.js, images.js
```

## Design tokens

Colours are roles, defined in `src/index.css` under `@theme` (light) and
`[data-theme="dark"]` (dark): `canvas`, `ink`, `body`, `dim`, `line`, `line-strong`,
`signal`, `on-signal` for the page; `paper`, `paper-ink`, `paper-dim`, `paper-line`,
`grid`, `paper-signal` for the grid-paper panels; and `sticker-*` (teal, pink,
yellow, orange, green), fixed in both themes with black text. Use them as Tailwind
utilities (`bg-canvas`, `text-paper-ink`, `bg-sticker-teal`, …). Type utilities:
`type-poster`, `type-heading`, `type-title`, `type-label`, `type-lede`, and
`type-data` (mono, reserved for dates, the clock and stack lists).
