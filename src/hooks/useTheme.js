import { useCallback, useEffect, useState } from 'react'

/* The site is dark by default. The initial value is already on <html> — the
 * inline script in index.html stamps it before first paint so there is no
 * flash of the wrong palette. This hook reads it back and lets the toggle
 * write to it; the visitor's choice is what persists, and there is no OS
 * listener, because following the OS would override the chosen default for a
 * first-time visitor on a light system. */
const read = () =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

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

  const toggle = useCallback(
    () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    []
  )

  return { theme, setTheme, toggle }
}
