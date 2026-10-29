/* Drawings of the private systems in Selected work, taken from their
   summaries in profile.js. Each shape is a component the summary names. */

/* Only Automation: one desktop app in front of a five-service backend. */
export function ServicesGlyph() {
  const services = [28, 64, 100, 136, 172]
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className="h-auto w-full">
      {services.map((y) => (
        <path
          key={y}
          d={`M118 100C160 100 160 ${y} 202 ${y}`}
          fill="none"
          strokeWidth="1.25"
          className="stroke-paper-line"
        />
      ))}
      <rect x="26" y="70" width="92" height="60" rx="10" className="fill-paper stroke-paper-ink" />
      <text x="42" y="98" className="fill-paper-ink font-sans text-[12px] font-medium">
        Desktop
      </text>
      <text x="42" y="114" className="fill-paper-dim font-mono text-[10px]">
        Electron
      </text>
      {services.map((y, i) => (
        <g key={y}>
          <rect x="202" y={y - 12} width="92" height="24" rx="7" className="fill-paper stroke-paper-ink" />
          <circle cx="216" cy={y} r="2.5" className={i === 0 ? 'fill-paper-signal' : 'fill-paper-dim'} />
          <text x="226" y={y + 3.5} className="fill-paper-ink font-mono text-[10px]">
            service {i + 1}
          </text>
        </g>
      ))}
    </svg>
  )
}

/* Clickstream: a fleet of real phones, each account moving on its own rhythm.
   The bar lengths come from a hash of the slot, the same trick the system uses
   so no two accounts move in lockstep. */
const hash = (text) =>
  [...text].reduce((h, c) => (h * 33) ^ c.charCodeAt(0), 5381) >>> 0

export function FleetGlyph() {
  const phones = Array.from({ length: 12 }, (_, i) => ({
    x: 30 + (i % 6) * 46,
    y: 30 + Math.floor(i / 6) * 76,
    a: 6 + (hash(`account-${i}`) % 18),
    b: 6 + (hash(`account-${i}-b`) % 18),
  }))

  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className="h-auto w-full">
      {phones.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={p.y} width="30" height="56" rx="6" className="fill-paper stroke-paper-ink" />
          <rect x={p.x + 6} y={p.y + 14} width={p.a} height="3" rx="1.5" className={i === 4 ? 'fill-paper-signal' : 'fill-paper-dim'} />
          <rect x={p.x + 6} y={p.y + 22} width={p.b} height="3" rx="1.5" className="fill-paper-line" />
          <rect x={p.x + 11} y={p.y + 48} width="8" height="2" rx="1" className="fill-paper-line" />
        </g>
      ))}
      <text x="30" y="194" className="fill-paper-dim font-mono text-[10px]">
        real devices · real SIM data · no emulators
      </text>
    </svg>
  )
}
