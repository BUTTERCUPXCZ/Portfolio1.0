import { skills } from '../data/profile.js'
import { iconFor } from '../data/icons.js'

/* Monochrome, currentColor, no brand colours — the page is achromatic by
   design and a row of coloured logos would be the loudest thing on it.
   Anything without an icon renders as a label, which is fine: the label is
   always there either way. */
function Item({ label }) {
  const path = iconFor(label)
  return (
    <li className="type-data flex items-center gap-2 text-body">
      {path ? (
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          aria-hidden="true"
          fill="currentColor"
          className="shrink-0 text-dim"
        >
          <path d={path} />
        </svg>
      ) : (
        <span
          aria-hidden="true"
          className="h-1 w-1 shrink-0 rounded-full bg-dim"
        />
      )}
      {label}
    </li>
  )
}

export default function Stack() {
  return (
    <div className="max-w-5xl">
      <dl className="space-y-5">
        {skills.map((group) => (
          <div
            key={group.id}
            className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[9rem_minmax(0,1fr)]"
          >
            <dt className="type-data text-dim">{group.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                {group.items.map((item) => (
                  <Item key={item} label={item} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

    </div>
  )
}
