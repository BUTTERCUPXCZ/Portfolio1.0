import { Fragment } from 'react'
import { about, experience, identity, social, stickers } from '../data/profile.js'
import { locationLine, timeLabel } from '../data/derived.js'
import Icon from '../components/Icon.jsx'
import Sticker from '../components/Sticker.jsx'
import NameTag from '../components/NameTag.jsx'

const github = social.find((link) => link.id === 'github')
const current = experience.find((role) => role.end === null)

/* Where each sticker sits on the panel from `lg` up, by position in the
   stickers list. Below `lg` they drop into a plain wrapped row under the
   name tag. Anything past the last slot simply joins that row. */
const SLOTS = [
  'lg:absolute lg:left-[5%] lg:top-[9%]',
  'lg:absolute lg:left-[3%] lg:top-[56%]',
  'lg:absolute lg:right-[17%] lg:top-[11%]',
  'lg:absolute lg:left-[19%] lg:bottom-[7%]',
  'lg:absolute lg:right-[6%] lg:top-[47%]',
  'lg:absolute lg:right-[24%] lg:bottom-[5%]',
]

/* The poster: the role at full width, three short columns of context, then
   the grid-paper panel where the work itself — the system diagram — sits
   among the things this person builds. */
export default function Hero({ time }) {
  return (
    <section id="top" data-section aria-label="Introduction" className="pt-8 pb-20 lg:pt-12">
      {/* Each word is unbreakable, so "Full-Stack" never splits at its hyphen;
          the poster wraps between words only. */}
      <h1 className="type-poster">
        {identity.headline.split(' ').map((word, i) => (
          <Fragment key={word + i}>
            {i > 0 && ' '}
            <span className="whitespace-nowrap">{word}</span>
          </Fragment>
        ))}
      </h1>

      <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:items-start">
        <p className="max-w-[22rem] text-body">
          {current
            ? `Currently ${current.role} at ${current.company}, based in ${locationLine}.`
            : `Based in ${locationLine}.`}
        </p>
        <p className="max-w-[26rem] text-body">
          <span className="font-semibold text-ink">{about.thesis}</span> {about.lede}
        </p>
        <div className="no-print flex flex-wrap gap-x-6 gap-y-3 md:flex-col md:items-end">
          <a
            href="#contact"
            className="type-label group inline-flex items-center gap-2 text-ink underline underline-offset-[0.35em]"
          >
            Get in touch
            <Icon
              name="arrow-right"
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label inline-flex items-center gap-1.5 text-dim hover:text-ink"
            >
              GitHub
              <Icon name="arrow-up-right" size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="no-print paper-grid relative mt-12 flex flex-col items-center gap-8 rounded-[2rem] px-5 py-8 md:mt-16 md:ml-[calc(50%-50vw)] md:rounded-l-none md:rounded-r-[12rem] md:pl-[calc(50vw-50%+2rem)] lg:block lg:h-[34rem] lg:rounded-r-[17rem] lg:p-0">
        {/* Name and title are already in the header and the h1, so the tag is
            hidden from assistive technology rather than read twice. */}
        <div
          aria-hidden="true"
          className="w-full max-w-[20rem] lg:absolute lg:top-1/2 lg:left-[calc(50%+1vw)] lg:w-[21rem] lg:max-w-none lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <NameTag />
        </div>

        <ul
          aria-label="What I build"
          className="flex flex-wrap items-center justify-center gap-4 md:pr-24 lg:contents lg:pr-0"
        >
          {stickers.map((sticker, i) => (
            <Sticker key={sticker.id} sticker={sticker} className={SLOTS[i] ?? ''} />
          ))}
        </ul>
      </div>

      <p className="type-data mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-dim">
        {identity.availability && (
          <>
            <span className="inline-flex items-center gap-2 text-ink">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
              {identity.availability}
            </span>
            <span aria-hidden="true">/</span>
          </>
        )}
        <span>{locationLine}</span>
        {time && (
          <>
            <span aria-hidden="true">/</span>
            <span>
              <time>{time}</time> {timeLabel}
            </span>
          </>
        )}
      </p>
    </section>
  )
}
