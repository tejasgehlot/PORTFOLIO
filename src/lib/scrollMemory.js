import { useEffect, useRef } from 'react'

const KEY_PREFIX = 'scrollpos:'

function readStored(page) {
  try {
    const raw = sessionStorage.getItem(KEY_PREFIX + page)
    return raw ? parseFloat(raw) : null
  } catch {
    return null
  }
}

function writeStored(page, y) {
  try {
    sessionStorage.setItem(KEY_PREFIX + page, String(y))
  } catch {
    /* ignore */
  }
}

/**
 * Keeps each "page" (portfolio / a case study / the live demo) at its own
 * remembered scroll position. Call with the current page key; whenever that
 * key changes, the hook restores whatever position was last saved for it
 * (or scrolls to top the first time a page is visited), and continuously
 * records the position while the user scrolls so a later "back" press can
 * resume exactly where they left off instead of snapping to the top.
 *
 * `getLenis` optionally returns the active Lenis instance so we scroll
 * through it (keeping inertia state in sync) instead of the raw window.
 */
export function useScrollMemory(page, getLenis) {
  const frame = useRef(null)
  const lastPage = useRef(null)

  useEffect(() => {
    if (lastPage.current && lastPage.current !== page) {
      writeStored(lastPage.current, window.scrollY)
    }
    lastPage.current = page

    const stored = readStored(page)
    const target = stored != null ? stored : 0

    const applyScroll = () => {
      const lenis = getLenis?.()
      if (lenis) {
        lenis.scrollTo(target, { immediate: true })
      } else {
        window.scrollTo(0, target)
      }
    }

    // double rAF: let the new page's DOM (images, layout) paint first
    requestAnimationFrame(() => requestAnimationFrame(applyScroll))
    // late images can grow the page after paint; nudge again shortly after
    const t = setTimeout(applyScroll, 220)

    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    const onScroll = () => {
      if (frame.current) return
      frame.current = requestAnimationFrame(() => {
        writeStored(page, window.scrollY)
        frame.current = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('beforeunload', () => writeStored(page, window.scrollY))
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [page])
}
