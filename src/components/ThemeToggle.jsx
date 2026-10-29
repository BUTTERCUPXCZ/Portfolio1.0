import { useTheme } from '../hooks/useTheme.js'
import Icon from './Icon.jsx'

/* role="switch" rather than a plain button: it announces its on/off state.
   The icon shows the theme you would switch to, which is what the click does. */
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
      className="no-print inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-line-strong hover:text-ink"
    >
      <span className="sr-only">Dark theme</span>
      <Icon name={isDark ? 'sun' : 'moon'} size={16} />
    </button>
  )
}
