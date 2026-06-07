import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import budsAI from '../assets/budsAI.png'

const ease = [0.22, 1, 0.36, 1]

const projects = [
  {
    img: budsAI,
    title: 'Buds AI',
    tag: 'AI Study Platform',
    description:
      'An AI-powered study platform that helps students learn smarter — intelligent note summarization, quiz generation, and personalized study assistance powered by Gemini 2.5 Flash.',
    github: 'https://github.com/BUTTERCUPXCZ/AI-Study-Buddy.git',
    site: 'https://budsai.vercel.app',
  },
]

const ProjectRow = ({ project, i }) => (
  <motion.article
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease }}
    className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-b border-line items-center"
  >
    {/* Index + meta */}
    <div className="lg:col-span-1 md:pl-2">
      <span className="font-mono text-sm text-accent">
        {String(i + 1).padStart(2, '0')}
      </span>
    </div>

    {/* Copy */}
    <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-3' : ''}`}>
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted block mb-3">
        {project.tag}
      </span>
      <h3 className="font-display uppercase tracking-tight text-3xl sm:text-5xl text-ink mb-4 group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-muted leading-relaxed mb-6 max-w-md">
        {project.description}
      </p>
      <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep text-ink hover:text-accent transition-colors"
        >
          View Code ↗
        </a>
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep text-ink hover:text-accent transition-colors"
          >
            Live Site ↗
          </a>
        )}
      </div>
    </div>

    {/* Image plate */}
    <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
      <div className="relative border border-ink overflow-hidden">
        <div className="flex justify-between px-3 py-1.5 border-b border-ink bg-paper font-mono text-[11px] uppercase tracking-widest text-muted">
          <span>Fig. {String(i + 1).padStart(2, '0')}</span>
          <span>{project.title}</span>
        </div>
        <div className="overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />
        </div>
      </div>
    </div>
  </motion.article>
)

const Portfolio = () => (
  <section id="work" className="px-4 sm:px-8 py-20 sm:py-28">
    <SectionHeader index="004" note="Work" title="Selected" accentWord="work" />

    <div className="border-t border-line">
      {projects.map((p, i) => (
        <ProjectRow key={p.title} project={p} i={i} />
      ))}
    </div>

    <div className="pt-10 text-right">
      <a
        href="https://github.com/BUTTERCUPXCZ"
        target="_blank"
        rel="noopener noreferrer"
        className="link-sweep font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
      >
        Full archive on GitHub ↗
      </a>
    </div>
  </section>
)

export default Portfolio
