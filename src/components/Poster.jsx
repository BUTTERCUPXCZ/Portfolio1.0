import { useState } from 'react'
import { motion } from 'motion/react'
import Identity from './Identity.jsx'
import Record from './Record.jsx'
import StatusLine from './StatusLine.jsx'
import { rise, stage } from './variants.js'

/* One orchestrated moment: the composition assembles once on load, then holds
   completely still. Nothing animates on scroll, nothing loops. */
export default function Poster() {
  /* requestAnimationFrame is suspended in a background tab, so a JS-driven
     entrance never runs and the page would paint nothing until it is focused.
     Opening a link in a new tab is normal behaviour, so when the document
     starts hidden we skip the entrance and render the final state directly. */
  const [animateIn] = useState(
    () => typeof document === 'undefined' || document.visibilityState === 'visible'
  )

  return (
    <motion.main
      initial={animateIn ? 'hidden' : false}
      animate="shown"
      variants={stage}
      className="poster-shell flex min-h-dvh flex-col gap-10 px-6 py-8 poster:h-dvh poster:min-h-0 poster:gap-0 poster:overflow-hidden poster:px-12 poster:py-7"
    >
      <motion.div variants={rise}>
        <StatusLine />
      </motion.div>

      {/* Identity 1–5, record 7–12. min-h-0 on both, or the grid refuses to
          shrink below its content and the page starts scrolling. */}
      <div className="poster-grid flex flex-1 flex-col gap-12 poster:grid poster:min-h-0 poster:grid-cols-12 poster:gap-x-12 poster:pt-4">
        <div className="min-h-0 poster:col-span-5 poster:flex poster:flex-col">
          <Identity />
        </div>

        {/* overflow-auto, not hidden: if the content ever outgrows the screen
            (he edits profile.js himself) a scrollbar appears here rather than
            the page silently swallowing a row. The document still never
            scrolls — only this column can. */}
        <div className="min-h-0 poster:col-span-6 poster:col-start-7 poster:valve-scroll poster:overflow-y-auto">
          <Record />
        </div>
      </div>
    </motion.main>
  )
}
