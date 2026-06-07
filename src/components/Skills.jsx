import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const ease = [0.22, 1, 0.36, 1]

const skills = [
  {
    category: 'Frontend',
    code: 'FE',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'TanStack', 'Shadcn UI', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    code: 'BE',
    technologies: ['Node.js', 'Express.js', 'NestJS', 'Redis', 'MySQL', 'PostgreSQL', 'Prisma', 'Supabase'],
  },
  {
    category: 'Tools & AI',
    code: 'TL',
    technologies: ['Git', 'GitHub', 'Figma', 'ChatGPT', 'Claude', 'Gemini Pro'],
  },
]

const Skills = () => (
  <section id="skills" className="px-4 sm:px-8 py-20 sm:py-28">
    <SectionHeader index="002" note="Stack" title="Technical" accentWord="arsenal" />

    <div className="border-t border-line">
      {skills.map((group, i) => (
        <motion.div
          key={group.code}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: i * 0.1 }}
          className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 sm:py-10 border-b border-line hover:bg-ink transition-colors duration-300"
        >
          <div className="md:col-span-1 font-mono text-xs text-accent pt-1 md:pl-2">
            /{group.code}
          </div>
          <h3 className="md:col-span-4 font-display uppercase tracking-tight text-2xl sm:text-3xl text-ink group-hover:text-paper transition-colors duration-300 md:pl-2">
            {group.category}
          </h3>
          <ul className="md:col-span-7 flex flex-wrap gap-x-2 gap-y-3 content-start md:pr-2">
            {group.technologies.map((t) => (
              <li
                key={t}
                className="font-mono text-xs uppercase tracking-widest border border-line px-3 py-1.5 text-muted group-hover:border-paper/30 group-hover:text-paper transition-colors duration-300"
              >
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Skills
