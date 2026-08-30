import { useEffect, useState } from 'react'
import { identity } from '../data/profile.js'
import { locationLine, timeZone } from '../data/derived.js'
import ThemeToggle from './ThemeToggle.jsx'

/* Name on the left, availability and local time on the right. The page is
   fully achromatic now — --color-signal survives only as the focus ring. */
export default function StatusLine() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-PH', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone,
        })
      )
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  /* Built as a list so a missing field cannot leave a dangling separator —
     `availability` is optional in profile.js. */
  const parts = [identity.availability, locationLine].filter(Boolean)

  return (
    <div className="flex items-start justify-between gap-6">
      <p className="type-label">{identity.name}</p>

      <div className="flex items-center gap-5">
        <p className="type-label text-right">
          {parts.join(' · ')}
          {time && (
            <>
              {parts.length > 0 && ' · '}
              <time className="tnum">{time}</time>
            </>
          )}
        </p>
        <ThemeToggle />
      </div>
    </div>
  )
}
