import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { n: '01', label: 'Index', href: '#top' },
  { n: '02', label: 'Stack', href: '#skills' },
  { n: '03', label: 'Record', href: '#experience' },
  { n: '04', label: 'Work', href: '#work' },
  { n: '05', label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-PH', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Manila',
        })
      )
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-[60] bg-paper/90 backdrop-blur-sm border-b border-line"
    >
      <nav className="flex items-stretch justify-between px-4 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 py-4 font-display text-sm tracking-tight uppercase"
        >
          IE<span className="text-accent">.</span>
          <span className="hidden lg:inline font-mono text-[11px] font-normal tracking-widest2 text-muted normal-case">
            / FULL-STACK DEVELOPER
          </span>
        </a>

        <ul className="hidden md:flex items-stretch">
          {links.map((l) => (
            <li key={l.n} className="flex border-l border-line">
              <a
                href={l.href}
                className="group flex items-center gap-2 px-5 font-mono text-xs uppercase tracking-widest text-ink hover:bg-ink hover:text-paper transition-colors duration-200"
              >
                <span className="text-accent text-[11px] group-hover:text-paper transition-colors">
                  {l.n}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile nav — compact */}
        <ul className="flex md:hidden items-center gap-4">
          {links.slice(1).map((l) => (
            <li key={l.n}>
              <a
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-widest text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 pl-5 border-l border-line font-mono text-[11px] tracking-widest2 uppercase text-muted">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Open to work · MNL {time}
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar
