import { contact, identity, social } from '../data/profile.js'
import { emailHref, locationLine, phoneHref } from '../data/derived.js'
import portrait from '../assets/portrait.jpg'
import ThemeToggle from './ThemeToggle.jsx'

/* The rail is the answer to "who is this and how do I reach them", and it
   never leaves the screen. On a scrolling page the reader can be six sections
   deep when they decide to make contact; making them scroll back to the top to
   find an email address is where portfolios lose their reply. */
export default function Rail({ sections, active, time }) {
  return (
    <aside className="page-rail lg:sticky lg:top-12 lg:h-fit lg:w-[17rem] lg:shrink-0">
      <img
        src={portrait}
        alt={identity.name}
        width="480"
        height="480"
        loading="eager"
        fetchPriority="high"
        className="aspect-square w-32 rounded-full object-cover lg:w-44"
      />

      <h1 className="type-data mt-5 font-medium text-ink">{identity.name}</h1>
      <p className="type-data text-dim">{identity.title}</p>

      <p className="type-label mt-4 leading-[1.6]">
        {identity.availability && (
          <>
            <span className="text-ink">{identity.availability}</span>
            {' · '}
          </>
        )}
        {locationLine}
        {time && (
          <>
            {' · '}
            <time className="tnum">{time}</time>
          </>
        )}
      </p>

      {/* Anchors, not routes — every section is already in the document, so a
          plain href works with Back, middle-click and no JavaScript. */}
      <nav aria-label="Sections" className="no-print mt-8 flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-y-2.5">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active === section.id ? 'true' : undefined}
            className={`type-label transition-colors ${
              active === section.id ? 'text-ink' : 'hover:text-ink'
            }`}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <address className="type-data mt-8 not-italic">
        <a
          href={emailHref}
          className="block text-ink underline-offset-4 hover:underline"
        >
          {contact.email}
        </a>
        {contact.showPhone && (
          <a
            href={phoneHref}
            className="block underline-offset-4 hover:text-ink hover:underline"
          >
            {contact.phoneDisplay}
          </a>
        )}

        <span className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
          {social.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="print-url underline-offset-4 hover:text-ink hover:underline"
            >
              {link.label}
            </a>
          ))}
        </span>
      </address>

      <div className="no-print mt-6 flex items-center gap-6">
        <a
          href={contact.cv.href}
          download
          className="type-label text-ink underline underline-offset-4"
        >
          ↓ CV
        </a>
        <ThemeToggle />
      </div>
    </aside>
  )
}
