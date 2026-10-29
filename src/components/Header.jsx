import { useEffect, useState } from 'react'
import { contact, identity } from '../data/profile.js'
import Icon from './Icon.jsx'
import ThemeToggle from './ThemeToggle.jsx'

/* The header is the answer to "who is this and how do I reach them", and it
   never leaves the screen. It sits flat on the canvas at the top of the page
   and only draws its bottom rule once there is content scrolling beneath it. */
export default function Header({ sections, active }) {
  const [scrolled, setScrolled] = useState(false)
  const [first, ...rest] = identity.name.split(' ')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`no-print sticky top-0 z-30 border-b bg-canvas transition-colors duration-300 ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[76rem] flex-wrap items-center gap-x-8 gap-y-2 px-5 py-3 sm:px-8">
        <a href="#top" className="mr-auto flex items-center gap-3 text-ink">
          {/* The mark: a plain pill of ink, square on one side. */}
          <span aria-hidden="true" className="h-7 w-12 rounded-l-md rounded-r-full bg-ink" />
          <span className="text-sm leading-[1.1] font-semibold">
            {first}
            <br />
            {rest.join(' ')}
          </span>
        </a>

        {/* Anchors, not routes — every section is already in the document, so
            a plain href works with Back, middle-click and no JavaScript. */}
        <nav
          aria-label="Sections"
          className="order-last -mx-5 w-[calc(100%+2.5rem)] overflow-x-auto px-5 sm:order-none sm:mx-0 sm:w-auto sm:overflow-visible sm:px-0"
        >
          <ul className="flex gap-6 text-sm font-medium whitespace-nowrap">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? 'true' : undefined}
                  className={`relative block py-1.5 transition-colors ${
                    active === section.id ? 'text-ink' : 'text-dim hover:text-ink'
                  }`}
                >
                  {section.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-signal transition-opacity ${
                      active === section.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contact.cv.href}
            download
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line-strong px-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-canvas"
          >
            <Icon name="download" size={15} />
            CV
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
