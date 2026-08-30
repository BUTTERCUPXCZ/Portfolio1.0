import { useEffect, useState } from 'react'
import { copyrightLine, timeZone } from '../data/derived.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import Rail from './Rail.jsx'
import Section from './Section.jsx'
import Hero from '../views/Hero.jsx'
import Experience from '../views/Experience.jsx'
import Work from '../views/Work.jsx'
import Stack from '../views/Stack.jsx'
import Education from '../views/Education.jsx'
import Contact from '../views/Contact.jsx'

/* Module-level so the array identity is stable — useScrollSpy depends on it. */
const SECTIONS = [
  { id: 'top', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/* Hoisted too: passing a fresh array on every render would tear down and
   rebuild the IntersectionObserver on every render. */
const SECTION_IDS = SECTIONS.map((section) => section.id)

export default function Shell() {
  const active = useScrollSpy(SECTION_IDS)
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-PH', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone,
        })
      )
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

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
    <div className="page-shell mx-auto flex w-full max-w-[92rem] flex-col gap-12 px-6 py-10 lg:flex-row lg:gap-20 lg:px-12 lg:py-14">
      <Rail sections={SECTIONS} active={active} time={time} />

      <div className="min-w-0 flex-1">
        <main className="space-y-24 lg:space-y-32">
          <Hero />

          <Section id="experience" lead="Professional" trail="experience">
            <Experience />
          </Section>

          <Section id="work" lead="Selected" trail="projects">
            <Work />
          </Section>

          <Section id="stack" lead="The" trail="stack">
            <Stack />
          </Section>

          <Section id="education" lead="Education">
            <Education />
          </Section>

          <Section id="contact" lead="Get in" trail="touch">
            <Contact />
          </Section>
        </main>

        <p className="type-label mt-24 lg:mt-32">{copyrightLine}</p>
      </div>
    </div>
  )
}
