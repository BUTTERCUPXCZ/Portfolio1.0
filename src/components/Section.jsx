import { motion } from 'motion/react'

/* A section announces itself with two stacked words — the first in ink, the
   second in dim. That contrast is the whole navigation system: on a long
   scroll the eye finds these shapes without needing rules, boxes or numbers.
   `lead` and `trail` are the two lines; a one-word section passes only `lead`. */
export default function Section({ id, lead, trail, aside, children }) {
  return (
    <motion.section
      id={id}
      data-section
      aria-labelledby={`${id}-heading`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <h2 id={`${id}-heading`} className="type-section text-ink">
          {lead}
          {trail && (
            <>
              {/* The space matters: without it the accessible name and any
                  copied text read "Professionalexperience". */}{' '}
              <br />
              <span className="text-dim">{trail}</span>
            </>
          )}
        </h2>
        {aside && <p className="type-label pb-2">{aside}</p>}
      </header>

      {children}
    </motion.section>
  )
}
