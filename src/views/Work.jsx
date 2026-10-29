import { visibleProjects } from '../data/derived.js'
import { projectImage } from '../data/images.js'
import Icon from '../components/Icon.jsx'
import Metric from '../components/Metric.jsx'
import { FleetGlyph, ServicesGlyph } from '../components/ProjectGlyphs.jsx'

/* Private systems have no screenshot to show, so they get a drawing of their
   shape instead. Keyed by slug so profile.js stays content-only. */
const GLYPHS = {
  'only-automation': ServicesGlyph,
  clickstream: FleetGlyph,
}

function Visual({ project }) {
  const image = project.featured ? projectImage(project.image) : null
  const Glyph = GLYPHS[project.slug]
  if (!image && !Glyph) return null

  return (
    <div className="no-print paper-grid self-start overflow-hidden rounded-[1.75rem]">
      {image ? (
        <div className="p-3">
          <img
            src={image}
            alt={`${project.title} interface`}
            width="1600"
            height="750"
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full rounded-2xl object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center p-6">
          <Glyph />
        </div>
      )}
    </div>
  )
}

/* Full-width rows, not a card grid. Text on the left carries everything a
   reader needs to place the work — what it is, who it was for, whether the
   source is open, when. "Private repository" is stated rather than left as an
   absence the reader has to interpret. */
export default function Work() {
  return (
    <div className="divide-y divide-line">
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
        ].filter(Boolean)

        return (
          <article
            key={project.slug}
            className="grid gap-x-12 gap-y-8 py-12 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]"
          >
            <div>
              <h3 className="type-title">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="print-url group inline-flex items-center gap-2 underline-offset-[0.12em] hover:underline"
                  >
                    {project.title}
                    <Icon
                      name="arrow-up-right"
                      size={24}
                      className="text-dim transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="type-data mt-3 text-dim">{meta.join(' · ')}</p>

              <p className="mt-5 max-w-[38rem]">
                <Metric text={project.summary} />
              </p>

              {project.stack?.length > 0 && (
                <ul aria-label="Stack" className="mt-6 flex max-w-[40rem] flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="type-data rounded-full border border-line-strong px-3 py-0.5 text-body"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {links.length > 0 && (
                <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      {...(link.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : { download: true })}
                      className="print-url type-label inline-flex items-center gap-1.5 text-ink underline underline-offset-[0.35em] decoration-line-strong transition-colors hover:decoration-signal"
                    >
                      {link.label}
                      <Icon
                        name={link.href.startsWith('http') ? 'arrow-up-right' : 'download'}
                        size={14}
                      />
                    </a>
                  ))}
                </p>
              )}
            </div>

            <Visual project={project} />
          </article>
        )
      })}
    </div>
  )
}
