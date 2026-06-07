import React from 'react'

const Footer = () => (
  <footer className="border-t border-ink">
    {/* Giant sign-off */}
    <div className="px-4 sm:px-8 py-10 overflow-hidden">
      <h2
        aria-hidden="true"
        className="font-display uppercase tracking-tight leading-none text-ink/10 text-[14vw] whitespace-nowrap select-none"
      >
        Ivan Eltagonde
      </h2>
    </div>

    <div className="border-t border-line px-4 sm:px-8 py-6 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[11px] sm:text-xs uppercase tracking-widest2 text-muted">
      <span>© 2026 Ivan Eltagonde — All rights reserved</span>
      <div className="flex gap-6">
        <a
          href="https://github.com/BUTTERCUPXCZ"
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-eltagonde-38a853312/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/ivan.eltagonde/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep hover:text-accent transition-colors"
        >
          Instagram
        </a>
      </div>
      <span>Doc. end — 005/005</span>
    </div>
  </footer>
)

export default Footer
