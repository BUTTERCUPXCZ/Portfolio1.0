import { visibleProjects } from '../data/derived.js'
import Metric from '../components/Metric.jsx'

/* One row of metadata per project, not three. The title row carries everything
   a reader needs to place the work — what it is, where it was built, whether
   the source is open, when — so the eye drops straight from the name to the
   summary. "Private repository" is stated rather than left as an absence the
   reader has to interpret. */
export default function Work() {
  return (
    <div className="max-w-4xl space-y-10">
      {visibleProjects.map((project) => {
        const links = [
          project.links.live && { label: 'Live site', href: project.links.live },
          project.links.github && { label: 'Source', href: project.links.github },
          project.links.download && {
            label: 'Download',
            href: project.links.download,
          },
        ].filter(Boolean)

        const href = project.links.live ?? project.links.github

        const meta = [
          project.tag,
          project.context,
          links.length === 0 && 'Private repository',
          project.year,
        ]
          .filter(Boolean)
          .join(' · ')

        return (
          <article key={project.slug} className="type-data">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <h3 className="font-medium">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="print-url text-ink underline-offset-4 hover:underline"
                  >
                    {project.title} ↗
                  </a>
                ) : (
                  <span className="text-ink">{project.title}</span>
                )}
              </h3>
              <span className="tnum text-dim">{meta}</span>
            </div>

            <p className="mt-2 max-w-3xl">
              <Metric text={project.summary} />
            </p>

            {project.stack?.length > 0 && (
              <p className="mt-3 text-dim">{project.stack.join(' · ')}</p>
            )}

            {links.length > 0 && (
              <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : { download: true })}
                    className="print-url text-ink underline underline-offset-4"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </p>
            )}
          </article>
        )
      })}
    </div>
  )
}
