import { useTheme } from '../hooks/useTheme.js'

/* role="switch" rather than a plain button: it announces its on/off state, and
   the visible control now shows that state too. */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggle}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="no-print inline-flex h-[18px] w-8 shrink-0 items-center rounded-full border border-dim/60 p-[2px] transition-colors hover:border-ink"
    >
      <span className="sr-only">Dark theme</span>
      <span
        aria-hidden="true"
        className={`h-3 w-3 rounded-full bg-ink transition-transform duration-200 ${
          isDark ? 'translate-x-[14px]' : 'translate-x-0'
        }`}
      />
    </button>
  )
}
