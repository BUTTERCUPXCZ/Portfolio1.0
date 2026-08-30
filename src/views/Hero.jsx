import { about } from '../data/profile.js'
import Typewriter from '../components/Typewriter.jsx'

/* Thesis and one sentence of context, nothing else. The facts that used to sit
   here — role, internship, projects, stack, graduation — each have their own
   section further down now, and repeating them at the top only made the reader
   scroll past the same information twice. */
export default function Hero() {
  return (
    <section id="top" data-section aria-label="Introduction" className="pb-14 lg:pb-20">
      <p className="type-thesis">{about.thesis}</p>
      <p className="type-lede mt-7 max-w-2xl">
        <Typewriter text={about.lede} />
      </p>
    </section>
  )
}
