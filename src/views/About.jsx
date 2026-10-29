import { about, education, experience, identity } from '../data/profile.js'
import { locationLine } from '../data/derived.js'

const current = experience.find((role) => role.end === null)

/* The paragraphs say how this person works; the facts underneath answer the
   questions a recruiter checks first — where, since when, where now, what
   degree. */
export default function About() {
  const facts = [
    { label: 'Based in', value: locationLine },
    { label: 'Building since', value: identity.since },
    current && {
      label: 'Currently',
      value: `${current.role}, ${current.company}`,
    },
    ...education.map((entry) => ({
      label: 'Education',
      value: `${entry.degree}, ${entry.school}`,
      note: `${entry.endNote ? `${entry.endNote} ` : ''}${entry.end}`,
    })),
  ].filter(Boolean)

  return (
    <div>
      <div className="grid max-w-[60rem] gap-x-12 gap-y-5 md:grid-cols-2">
        {about.paragraphs.map((text, i) => (
          <p key={text} className={i === 0 ? 'type-lede text-ink' : 'type-lede'}>
            {text}
          </p>
        ))}
      </div>

      <dl className="mt-14 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label + fact.value} className="border-t border-line-strong pt-3">
            <dt className="type-label text-dim">{fact.label}</dt>
            <dd className="mt-1.5 text-ink">{fact.value}</dd>
            {fact.note && <dd className="type-data mt-0.5 text-dim">{fact.note}</dd>}
          </div>
        ))}
      </dl>
    </div>
  )
}
