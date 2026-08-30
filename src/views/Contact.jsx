import { contact, identity, social } from '../data/profile.js'
import { emailHref, locationLine, phoneHref } from '../data/derived.js'

/* The end of a long scroll is where a reader decides. It gets the address at
   full size rather than a form — a form asks them to compose something now,
   an address lets them forward it to whoever else has to approve the hire. */
export default function Contact() {
  return (
    <div className="max-w-4xl">
      {identity.availabilityDetail && (
        <p className="type-lede max-w-xl">{identity.availabilityDetail}</p>
      )}

      <a
        href={emailHref}
        className="mt-8 block text-[clamp(1.5rem,6.2vw,3.5rem)] font-semibold leading-none tracking-[-0.04em] text-ink underline decoration-1 underline-offset-[0.12em]"
      >
        {contact.email}
      </a>

      <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-3">
        {contact.showPhone && (
          <div>
            <p className="type-label">Phone</p>
            <a
              href={phoneHref}
              className="type-data mt-2 block text-ink underline-offset-4 hover:underline"
            >
              {contact.phoneDisplay}
            </a>
          </div>
        )}

        <div>
          <p className="type-label">Based in</p>
          <p className="type-data mt-2 text-body">{locationLine}</p>
        </div>

        <div>
          <p className="type-label">Elsewhere</p>
          <p className="type-data mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {social.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="print-url text-ink underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </p>
        </div>
      </div>

      <p className="type-data mt-10">
        <a
          href={contact.cv.href}
          download
          className="text-ink underline underline-offset-4"
        >
          ↓ Download CV
        </a>
        {contact.cv.updated && (
          <span className="text-dim"> · updated {contact.cv.updated}</span>
        )}
      </p>
    </div>
  )
}
