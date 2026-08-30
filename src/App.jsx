import { MotionConfig } from 'motion/react'
import Shell from './components/Shell.jsx'

/* reducedMotion="user" makes every Motion animation on the page honour the
   operating system setting. The CSS media query alone does not reach these —
   Motion animates with JavaScript, not CSS transitions. */
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Shell />
    </MotionConfig>
  )
}
