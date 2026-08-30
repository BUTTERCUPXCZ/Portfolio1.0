import { useEffect, useState } from 'react'

/* Which section the reader is actually looking at.
 *
 * The root margin collapses the viewport to a thin band across its middle, so
 * "current" means the section under the reader's eye rather than whichever one
 * happens to touch the top edge. Without it, a short section scrolling past
 * the top would steal the highlight from the tall one filling the screen. */
export function useScrollSpy(ids, band = '-45% 0px -50% 0px') {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting)
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: band }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids, band])

  return active
}
