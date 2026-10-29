import { experience } from '../data/profile.js'
import { formatPeriod } from '../data/derived.js'
import Icon from '../components/Icon.jsx'
import Metric from '../components/Metric.jsx'

/* Role first, company second. A recruiter is matching a job title, not a
   company they have never heard of. The period runs down its own column on
   tabular figures, so dates line up without any rule between entries. */
export default function Experience() {
  return (
    <div className="space-y-14">
      {experience.map((role) => {
        const [primary, ...rest] = role.links ?? []
        const current = role.end === null
        return (
          <article
            key={role.id}
            className="grid gap-x-10 gap-y-3 sm:grid-cols-[11rem_minmax(0,1fr)]"
          >
            <p className="type-data flex items-center gap-2 self-start text-dim sm:pt-1.5">
              {current && (
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                />
              )}
              <span className={current ? 'text-ink' : undefined}>{formatPeriod(role)}</span>
            </p>

            <div>
              <h3 className="type-title">{role.role}</h3>

              <p className="mt-1 text-dim">
                {primary ? (
                  <a
                    href={primary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="print-url inline-flex items-center gap-1 text-ink underline-offset-4 hover:underline"
                  >
                    {role.company}
                    <Icon name="arrow-up-right" size={14} className="text-dim" />
                  </a>
                ) : (
                  <span className="text-ink">{role.company}</span>
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

              <ul className="mt-5 max-w-[42rem] space-y-2.5">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full border border-line-strong"
                    />
                    <span>
                      <Metric text={item} />
                    </span>
                  </li>
                ))}
              </ul>

              {role.stack?.length > 0 && (
                <p className="type-data mt-5 max-w-[42rem] text-dim">
                  {role.stack.join(' · ')}
                </p>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}
