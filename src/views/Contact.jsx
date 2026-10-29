import { useEffect, useState } from 'react'
import { contact, identity, social } from '../data/profile.js'
import { emailHref, locationLine, phoneHref, timeLabel } from '../data/derived.js'
import Icon from '../components/Icon.jsx'

/* Copying beats a mailto: for anyone on a machine with no mail client set up,
   which is most recruiters on a work laptop. The status is announced politely
   so screen-reader users hear the result, not just sighted ones. */
function CopyEmail() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(id)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
    } catch {
      // Clipboard blocked (insecure context or permissions) — the address is
      // still on screen and selectable, so there is nothing else to do.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="no-print type-label inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-canvas transition-[filter] hover:brightness-90"
    >
      <Icon name={copied ? 'check' : 'copy'} size={15} />
      <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
    </button>
  )
}

/* The end of a long scroll is where a reader decides. It gets the address at
   full size rather than a form — a form asks them to compose something now,
   an address lets them forward it to whoever else has to approve the hire. */
export default function Contact({ time }) {
  return (
    <div>
      {identity.availabilityDetail && (
        <p className="type-lede max-w-xl">{identity.availabilityDetail}</p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5">
        <a
          href={emailHref}
          className="text-[clamp(1.75rem,6vw,4.75rem)] leading-none font-extrabold break-all text-ink underline decoration-line-strong decoration-2 underline-offset-[0.12em] transition-colors [font-stretch:66%] hover:decoration-signal sm:break-normal"
        >
          {contact.email}
        </a>
        <CopyEmail />
      </div>

      <dl className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
        {contact.showPhone && (
          <div className="border-t border-line-strong pt-3">
            <dt className="type-label text-dim">Phone</dt>
            <dd className="mt-1">
              <a href={phoneHref} className="tnum text-ink underline-offset-4 hover:underline">
                {contact.phoneDisplay}
              </a>
            </dd>
          </div>
        )}

        <div className="border-t border-line-strong pt-3">
          <dt className="type-label text-dim">Based in</dt>
          <dd className="mt-1 text-ink">{locationLine}</dd>
          {time && (
            <dd className="type-data mt-0.5 text-dim">
              <time>{time}</time> {timeLabel} local time
            </dd>
          )}
        </div>

        <div className="border-t border-line-strong pt-3">
          <dt className="type-label text-dim">Elsewhere</dt>
          <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
            {social.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="print-url inline-flex items-center gap-1 text-ink underline-offset-4 hover:underline"
              >
                {link.label}
                <Icon name="arrow-up-right" size={14} className="text-dim" />
              </a>
            ))}
          </dd>
        </div>

        <div className="border-t border-line-strong pt-3">
          <dt className="type-label text-dim">Résumé</dt>
          <dd className="mt-1">
            <a
              href={contact.cv.href}
              download
              className="inline-flex items-center gap-1.5 text-ink underline-offset-4 hover:underline"
            >
              {contact.cv.label}
              <Icon name="download" size={15} className="text-dim" />
            </a>
          </dd>
          {contact.cv.updated && (
            <dd className="type-data mt-0.5 text-dim">Updated {contact.cv.updated}</dd>
          )}
        </div>
      </dl>
    </div>
  )
}
