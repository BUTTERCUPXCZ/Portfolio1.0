/* Pulls figures out of prose without rewriting a word of it. A recruiter scans
   for numbers before sentences, and "60%" buried mid-clause is invisible. Only
   percentages and counts (10+, 20+) match, so "React 19" stays untouched. */
const PATTERN = /(\d+(?:\.\d+)?%|\b\d+\+)/g
const isMetric = (part) => /^(?:\d+(?:\.\d+)?%|\d+\+)$/.test(part)

export default function Metric({ text }) {
  return text.split(PATTERN).map((part, i) =>
    isMetric(part) ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      part
    )
  )
}
