/* Shared Motion variants, in their own file so the component modules stay
   component-only and Fast Refresh keeps working.

   `stage` carries a real property in both states on purpose: a variant that
   holds nothing but a `transition` is not propagated to children, which leaves
   every descendant stuck in `hidden`. */
export const stage = {
  hidden: { opacity: 1 },
  shown: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
}

export const rise = {
  hidden: { opacity: 0, y: 12 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}
