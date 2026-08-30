import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

const MS_PER_CHARACTER = 26

/* Types a line out on load.
 *
 * Two copies of the sentence are stacked in one grid cell. The transparent one
 * is the real text: it reserves the exact height the finished line needs, so
 * nothing below it shifts as the characters arrive, and it is what screen
 * readers, crawlers and Ctrl+F get — a half-typed sentence should never be the
 * page's accessible copy. The visible copy is the animation, and is hidden
 * from assistive technology so the line is not announced letter by letter.
 */
export default function Typewriter({ text }) {
  const reduced = useReducedMotion()
  const [ticks, setTicks] = useState(0)

  useEffect(() => {
    if (reduced) return

    const id = setInterval(() => {
      setTicks((count) => {
        if (count >= text.length) {
          clearInterval(id)
          return count
        }
        return count + 1
      })
    }, MS_PER_CHARACTER)

    return () => clearInterval(id)
  }, [text.length, reduced])

  /* Derived, not stored: someone who prefers reduced motion gets the whole
     line on the first render rather than a state update chasing it. */
  const shown = reduced ? text.length : Math.min(ticks, text.length)

  return (
    <span className="grid">
      <span className="col-start-1 row-start-1 opacity-0">{text}</span>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {text.slice(0, shown)}
        {shown < text.length && <span className="caret" />}
      </span>
    </span>
  )
}
