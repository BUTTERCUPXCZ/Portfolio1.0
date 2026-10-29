import { coreStack, skills } from '../data/profile.js'
import { iconFor } from '../data/icons.js'

/* Monochrome, currentColor, no brand colours — the stickers already carry the
   page's colour, and a row of logos would fight them. Anything without an
   icon renders as a label alone, which is fine: the label is always there. */
function Item({ label }) {
  const path = iconFor(label)
  return (
    <li className="flex items-center gap-2.5">
      {path ? (
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          aria-hidden="true"
          fill="currentColor"
          className="shrink-0 opacity-70"
        >
          <path d={path} />
        </svg>
      ) : (
        <span aria-hidden="true" className="flex h-[15px] w-[15px] shrink-0 items-center justify-center">
          <span className="h-1 w-1 rounded-full bg-current opacity-60" />
        </span>
      )}
      {label}
    </li>
  )
}

/* The second sheet of grid paper, rounded on the opposite side to the hero's
   so the two panels bracket the page. Core stack first as solid pills, then
   the full inventory as columns. */
export default function Stack() {
  return (
    <div className="paper-grid rounded-[2rem] px-6 py-10 sm:px-10 md:rounded-l-[12rem] md:rounded-r-[2rem] md:py-14 md:pr-12 md:pl-[clamp(4rem,12vw,10rem)]">
      <h3 className="type-label text-paper-dim">Core stack</h3>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {coreStack.map((item) => (
          <li
            key={item}
            className="rounded-full bg-paper-ink px-4 py-1.5 text-[0.9375rem] font-semibold text-paper"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => (
          <div key={group.id} className="border-t border-paper-line pt-4">
            <h3 className="text-[1.5rem] leading-none font-extrabold uppercase [font-stretch:68%]">
              {group.group}
            </h3>
            <ul className="mt-4 space-y-2 text-paper-ink">
              {group.items.map((item) => (
                <Item key={item} label={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
