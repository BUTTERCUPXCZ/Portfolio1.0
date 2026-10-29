import { useEffect, useState } from 'react'

/* Local time in the given IANA zone, as HH:MM. Minute precision only, so a
   30-second tick is enough and the page never re-renders every second. */
export function useClock(timeZone) {
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
  }, [timeZone])

  return time
}
