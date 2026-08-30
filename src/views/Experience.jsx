import { experience } from '../data/profile.js'
import { formatPeriod } from '../data/derived.js'
import Metric from '../components/Metric.jsx'

/* Role first, company second. A recruiter is matching a job title, not a
   company they have never heard of. */
export default function Experience() {
  return (
    <div className="max-w-4xl space-y-10">
      {experience.map((role) => {
        const [primary, ...rest] = role.links ?? []
        return (
          <article key={role.id} className="type-data">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium text-ink">{role.role}</h3>
              <span className="tnum shrink-0 text-dim">{formatPeriod(role)}</span>
            </div>

            <p className="text-dim">
              {primary ? (
                <a
                  href={primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="print-url underline-offset-4 hover:text-ink hover:underline"
                >
                  {role.company} ↗
                </a>
              ) : (
                role.company
              )}
              {rest.map((link) => (
                <span key={link.href}>
                  {' · '}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="print-url underline-offset-4 hover:text-ink hover:underline"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
              {role.employment && ` · ${role.employment}`}
            </p>

            <ul className="mt-2.5 space-y-1.5">
              {role.highlights.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="shrink-0 text-dim">
                    •
                  </span>
                  <span>
                    <Metric text={item} />
                  </span>
                </li>
              ))}
            </ul>

            {role.stack?.length > 0 && (
              <p className="mt-3 text-dim">{role.stack.join(' · ')}</p>
            )}
          </article>
        )
      })}
    </div>
  )
}
