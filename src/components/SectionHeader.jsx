import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

/** Spec-document section header: index number + title + mono annotation. */
const SectionHeader = ({ index, title, accentWord, note }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, ease }}
    className="border-b border-ink pb-6 mb-12 sm:mb-16"
  >
    <div className="flex justify-between items-start font-mono text-[11px] sm:text-xs uppercase tracking-widest2 text-muted mb-4">
      <span>
        Doc. No. {index} — <span className="text-accent">{note}</span>
      </span>
      <span className="hidden sm:inline">Ivan Eltagonde</span>
    </div>
    <h2 className="font-display uppercase tracking-tight leading-none text-ink text-4xl sm:text-6xl lg:text-7xl">
      {title}{' '}
      {accentWord && (
        <span className="font-serif italic font-normal normal-case text-accent">
          {accentWord}
        </span>
      )}
    </h2>
  </motion.div>
)

export default SectionHeader
