/* Every section opens on a poster-sized heading that runs the full width, the
   way the hero does. `aside` sits opposite it on wide screens — a sentence or
   a link, never a second heading. */
export default function Section({ id, title, aside, children }) {
  return (
    <section
      id={id}
      data-section
      aria-labelledby={`${id}-heading`}
      className="border-t border-line py-20 lg:py-28"
    >
      <header className="mb-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-4 lg:mb-16">
        <h2 id={`${id}-heading`} className="type-heading">
          {title}
        </h2>
        {aside && <div className="max-w-sm text-dim lg:pb-2">{aside}</div>}
      </header>

      {children}
    </section>
  )
}
