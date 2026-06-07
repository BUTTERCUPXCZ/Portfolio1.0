import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const ease = [0.22, 1, 0.36, 1]

const Field = ({ label, ...props }) => (
  <label className="block">
    <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted block mb-2">
      {label}
    </span>
    {props.rows ? (
      <textarea
        {...props}
        className="w-full bg-transparent border-b border-ink py-3 text-ink placeholder-muted/70 focus:border-accent focus:outline-none transition-colors resize-none"
      />
    ) : (
      <input
        {...props}
        className="w-full bg-transparent border-b border-ink py-3 text-ink placeholder-muted/70 focus:border-accent focus:outline-none transition-colors"
      />
    )}
  </label>
)

const Contact = () => (
  <section id="contact" className="px-4 sm:px-8 py-20 sm:py-28">
    <SectionHeader index="005" note="Contact" title="Let's" accentWord="talk" />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease }}
        className="lg:col-span-6 space-y-6"
      >
        <span className="font-mono text-xs text-accent">/ABOUT</span>
        <p className="text-lg sm:text-xl text-ink leading-relaxed">
          I&apos;m a passionate full-stack developer specializing in scalable
          web applications. With hands-on experience in{' '}
          <span className="font-serif italic">React, TypeScript, Node.js,
          and PostgreSQL</span>, I build robust solutions that solve
          real-world problems — from AI-powered platforms to enterprise-level
          features.
        </p>
        <p className="text-muted leading-relaxed">
          I thrive on turning complex challenges into elegant, user-friendly
          applications. Currently open to internships, freelance work, and
          full-time roles.
        </p>

        <div className="pt-4 border-t border-line font-mono text-xs uppercase tracking-widest space-y-2 text-muted">
          <p>Base — Manila, Philippines</p>
          <p>
            Status — <span className="text-accent">Open to work</span>
          </p>
        </div>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        action="https://getform.io/f/alllnlpa"
        method="POST"
        className="lg:col-span-6 space-y-8"
        id="form"
      >
        <Field label="01 — Name" type="text" id="name" name="name" placeholder="Your name" />
        <Field label="02 — Email" type="email" id="email" name="email" placeholder="you@example.com" />
        <Field label="03 — Message" id="message" name="message" rows="4" placeholder="What are we building?" />

        <button
          type="submit"
          className="group inline-flex items-center gap-3 bg-ink text-paper font-mono text-xs uppercase tracking-widest px-7 py-4 hover:bg-accent transition-colors duration-300"
        >
          Send Message
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </motion.form>
    </div>
  </section>
)

export default Contact
