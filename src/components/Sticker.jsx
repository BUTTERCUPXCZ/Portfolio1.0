import { useId } from 'react'

/* One printed sticker. Colour and shape come from profile.js; the class
   strings are written out in full so Tailwind can see them. */
const COLORS = {
  teal: 'bg-sticker-teal',
  pink: 'bg-sticker-pink',
  yellow: 'bg-sticker-yellow',
  orange: 'bg-sticker-orange',
  green: 'bg-sticker-green',
}

const LABEL = 'font-extrabold uppercase leading-[0.92] [font-stretch:72%]'
const DETAIL = 'type-label mt-1.5 text-[0.6875rem] opacity-80'

/* Text running round the edge, with a drawn globe in the middle — the one
   sticker that is read by turning your head, like the real thing. */
function Badge({ label }) {
  const id = useId()
  const ring = 'M80 80m-58 0a58 58 0 1 1 116 0a58 58 0 1 1 -116 0'
  return (
    <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
      <defs>
        <path id={id} d={ring} />
      </defs>
      <text className="fill-current font-sans text-[15px] font-extrabold uppercase tracking-[0.14em]">
        <textPath href={`#${id}`} textLength="356" lengthAdjust="spacing">
          {label}
        </textPath>
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <circle cx="80" cy="80" r="22" />
        <ellipse cx="80" cy="80" rx="9" ry="22" />
        <path d="M58 80h44M61.5 69h37M61.5 91h37" />
      </g>
    </svg>
  )
}

export default function Sticker({ sticker, className = '' }) {
  const { shape, color, tilt = 0, label, detail } = sticker
  const tone = COLORS[color] ?? COLORS.teal
  const style = { '--tilt': `${tilt}deg` }

  if (shape === 'badge') {
    return (
      <li style={style} className={`sticker ${tone} h-32 w-32 rounded-full p-1 sm:h-36 sm:w-36 ${className}`}>
        <span className="sr-only">{label.replaceAll('•', ',')}</span>
        <Badge label={label} />
      </li>
    )
  }

  if (shape === 'circle') {
    return (
      <li
        style={style}
        className={`sticker ${tone} flex h-36 w-36 flex-col items-center justify-center rounded-full p-4 text-center sm:h-40 sm:w-40 ${className}`}
      >
        <span className={`${LABEL} text-[1.375rem] sm:text-2xl`}>{label}</span>
        {detail && <span className={DETAIL}>{detail}</span>}
      </li>
    )
  }

  return (
    <li style={style} className={`sticker ${tone} rounded-2xl px-5 py-3.5 ${className}`}>
      <span className={`${LABEL} block text-[1.375rem] sm:text-[1.625rem]`}>{label}</span>
      {detail && <span className={`${DETAIL} block`}>{detail}</span>}
    </li>
  )
}
