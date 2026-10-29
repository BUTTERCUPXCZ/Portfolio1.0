import { useEffect } from 'react'
import { identity } from '../data/profile.js'
import { copyrightLine, timeZone } from '../data/derived.js'
import { useClock } from '../hooks/useClock.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import Header from './Header.jsx'
import Icon from './Icon.jsx'
import Section from './Section.jsx'
import Hero from '../views/Hero.jsx'
import About from '../views/About.jsx'
import Work from '../views/Work.jsx'
import Experience from '../views/Experience.jsx'
import Stack from '../views/Stack.jsx'
import Contact from '../views/Contact.jsx'

/* Module-level so the array identity is stable — useScrollSpy depends on it.
   `top` is spied on but not listed: the name in the header already goes there. */
const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = ['top', ...NAV.map((section) => section.id)]

export default function Shell() {
  const active = useScrollSpy(SECTION_IDS)
  const time = useClock(timeZone)

  /* The site used to be four routed pages. Anything already linking to
     #/work or #/stack still lands in the right place. */
  useEffect(() => {
    const legacy = window.location.hash.match(/^#\/(\w*)/)
    if (!legacy) return
    const id = legacy[1] === '' || legacy[1] === 'home' ? 'top' : legacy[1]
    window.history.replaceState(null, '', `${window.location.pathname}#${id}`)
    document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-on-signal"
      >
        Skip to content
      </a>

      <Header sections={NAV} active={active} />

      <main id="main" className="mx-auto max-w-[76rem] px-5 sm:px-8">
        <Hero time={time} />

        <Section id="about" title="About">
          <About />
        </Section>

        <Section id="work" title="Selected work">
          <Work />
        </Section>

        <Section id="experience" title="Experience">
          <Experience />
        </Section>

        <Section id="stack" title="Stack">
          <Stack />
        </Section>

        <Section id="contact" title="Get in touch">
          <Contact time={time} />
        </Section>
      </main>

      <footer className="type-label mx-auto flex max-w-[76rem] flex-wrap items-center justify-between gap-4 border-t border-line px-5 py-8 text-dim sm:px-8">
        <p>{copyrightLine}</p>
        <p>
          {identity.title} · Building since {identity.since}
        </p>
        <a href="#top" className="no-print inline-flex items-center gap-1.5 hover:text-ink">
          Back to top
          <Icon name="arrow-up" size={14} />
        </a>
      </footer>
    </>
  )
}
