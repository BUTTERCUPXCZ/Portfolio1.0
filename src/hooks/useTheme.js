import { useCallback, useEffect, useState } from 'react'

/* The initial value is already on <html> — the inline script in index.html
 * stamps it before first paint so there is no flash of the wrong palette.
 * This hook only reads it back and lets the toggle write to it. */
const read = () =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'

export function useTheme() {
  const [theme, setTheme] = useState(read)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Private browsing or blocked storage — the theme still applies for
      // this page view, it just will not be remembered.
    }
  }, [theme])

  // Follow the OS only while the visitor has not made an explicit choice.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      let stored = null
      try {
        stored = localStorage.getItem('theme')
      } catch {
        stored = null
      }
      if (!stored) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(
    () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    []
  )

  return { theme, setTheme, toggle }
}
