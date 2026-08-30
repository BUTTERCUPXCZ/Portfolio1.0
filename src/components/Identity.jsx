import { motion } from 'motion/react'
import { rise } from './variants.js'
import { about, contact, identity, social } from '../data/profile.js'
import { emailHref, phoneHref } from '../data/derived.js'
import portrait from '../assets/portrait-dither.png'

/* The claim is the hero and the name is a label. For someone scanning, what he
   does is more useful than what he is called — and the name is in the contact
   block a few inches below regardless. */
export default function Identity() {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div>
        <motion.h1 variants={rise} className="type-thesis">
          {about.thesis}
        </motion.h1>

        <motion.p variants={rise} className="type-lede mt-5 max-w-xl">
          {about.lede}
        </motion.p>
      </div>

      <motion.div variants={rise} className="flex items-end gap-6">
        <img
          src={portrait}
          alt={identity.name}
          width="600"
          height="600"
          loading="eager"
          fetchPriority="high"
          className="dither w-24 shrink-0 poster:w-32"
        />

        <address className="type-data not-italic">
          <a
            href={emailHref}
            className="block text-ink underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          {contact.showPhone && (
            <a
              href={phoneHref}
              className="block underline-offset-4 hover:text-ink hover:underline"
            >
              {contact.phoneDisplay}
            </a>
          )}

          <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {social.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="print-url underline-offset-4 hover:text-ink hover:underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contact.cv.href}
              download
              className="text-ink underline-offset-4 hover:underline"
            >
              ↓ CV
            </a>
          </span>
        </address>
      </motion.div>
    </div>
  )
}
