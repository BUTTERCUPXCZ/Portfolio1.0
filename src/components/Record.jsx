import { motion } from 'motion/react'
import { rise } from './variants.js'
import { education, experience, skills } from '../data/profile.js'
import { formatPeriod, visibleProjects } from '../data/derived.js'

function Group({ label, children }) {
  return (
    <motion.section variants={rise}>
      <h2 className="type-label mb-2 text-ink">{label}</h2>
      <div className="space-y-3">{children}</div>
    </motion.section>
  )
}

/* Title left, period right, aligned on tabular figures. There is no rule
   between them — the numerals hold the column. */
function Entry({ title, meta, subtitle, line, highlights, showHighlights, href, links = [] }) {
  const heading = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="print-url text-ink underline-offset-4 hover:underline"
    >
      {title} ↗
    </a>
  ) : (
    <span className="text-ink">{title}</span>
  )

  return (
    <article className="type-data">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium">{heading}</h3>
        <span className="tnum shrink-0 text-dim">{meta}</span>
      </div>

      {(subtitle || links.length > 1) && (
        <p className="text-dim">
          {subtitle}
          {links.slice(1).map((link) => (
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
        </p>
      )}

      {showHighlights && highlights?.length > 0 ? (
        <ul className="mt-1 space-y-0.5">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span aria-hidden="true" className="shrink-0 text-dim">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        line && <p className="poster-oneliner mt-1">{line}</p>
      )}

      {/* Hidden on screen, expanded by the print stylesheet so paper carries
          the detail the poster deliberately leaves out. */}
      {!showHighlights && highlights?.length > 0 && (
        <ul hidden className="print-highlights mt-1 list-disc space-y-0.5 pl-4">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default function Record() {
  return (
    <div className="space-y-8 poster:space-y-7">
      <Group label="Experience">
        {experience.map((role) => (
          <Entry
            key={role.id}
            title={role.company}
            meta={formatPeriod(role)}
            subtitle={role.role}
            line={role.oneLiner ?? role.highlights[0]}
            highlights={role.highlights}
            showHighlights={role.showHighlights}
            href={role.links?.[0]?.href}
            links={role.links}
          />
        ))}
      </Group>

      {visibleProjects.length > 0 && (
        <Group label="Selected work">
          {visibleProjects.map((project) => (
            <Entry
              key={project.slug}
              title={project.title}
              meta={project.year}
              line={project.oneLiner ?? project.summary}
              href={project.links.live ?? project.links.github}
            />
          ))}
        </Group>
      )}

      <Group label="Education">
        {education.map((entry) => (
          <Entry
            key={entry.id}
            title={entry.school}
            meta={`${entry.endNote ? `${entry.endNote} ` : ''}${entry.end}`}
            subtitle={entry.degree}
          />
        ))}
      </Group>

      {/* Grouped, not one 40-item run — the labels are what make it scannable,
          and they reuse the left-label / right-content rhythm of the entries. */}
      <Group label="Stack">
        <dl className="type-data space-y-0.5">
          {skills
            .filter((group) => group.id !== 'core')
            .map((group) => (
              <div
                key={group.id}
                className="grid grid-cols-[8.75rem_minmax(0,1fr)] gap-x-4"
              >
                <dt className="text-dim">{group.group}</dt>
                <dd className="text-body">{group.items.join(' · ')}</dd>
              </div>
            ))}
        </dl>
      </Group>
    </div>
  )
}
