import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const stack = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'NestJS',
  'PostgreSQL', 'MySQL', 'Prisma', 'Redis', 'Tailwind CSS', 'Supabase',
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/BUTTERCUPXCZ' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ivan-eltagonde-38a853312/' },
  { label: 'Instagram', href: 'https://www.instagram.com/ivan.eltagonde/' },
]

const ease = [0.22, 1, 0.36, 1]

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex flex-col pt-24 sm:pt-28">
      {/* Spec header strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-4 sm:mx-8 flex justify-between border-b border-line pb-3 font-mono text-[11px] sm:text-xs uppercase tracking-widest2 text-muted"
      >
        <span>Doc. No. 001 — Index</span>
        <span className="hidden sm:inline">14.5995° N, 120.9842° E</span>
        <span>EST. 2022</span>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-12">
        {/* Name — oversized, stacked */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="font-display uppercase leading-[0.85] tracking-tight text-ink text-[16vw] sm:text-[13vw]"
          >
            Ivan
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="font-display uppercase leading-[0.85] tracking-tight text-[16vw] sm:text-[13vw]"
          >
            Elta<span className="text-accent">g</span>onde
          </motion.h1>
        </div>

        {/* Role line — serif italic against the black slab */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className="mt-6 sm:mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-line pt-6"
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted block mb-2">
              Currently —
            </span>
            <TypeAnimation
              sequence={[
                'Full-Stack Developer', 1600,
                'Backend Engineer', 1600,
                'CS Student, Bldg. Things', 1600,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-serif italic text-3xl sm:text-5xl text-ink"
            />
          </div>

          <p className="max-w-md text-muted text-base sm:text-lg leading-relaxed">
            I craft robust, scalable web applications with a focus on
            performance — turning complex problems into elegant, efficient
            solutions.
          </p>
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="/ELTAGONDE_cv.pdf"
            download
            className="group inline-flex items-center gap-3 bg-ink text-paper font-mono text-xs uppercase tracking-widest px-7 py-4 hover:bg-accent transition-colors duration-300"
          >
            Download CV
            <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
          </a>

          <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-ink hover:text-accent transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tech ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="border-y border-ink bg-ink text-paper overflow-hidden"
      >
        <div className="animate-marquee flex whitespace-nowrap py-3 will-change-transform">
          {[...stack, ...stack].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-mono text-xs uppercase tracking-widest2 mx-6 flex items-center gap-6"
            >
              {t} <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default React.memo(Hero)
