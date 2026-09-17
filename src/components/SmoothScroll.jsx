import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

// module-level so any component (e.g. the scroll-memory hook) can reach
// the live instance without prop-drilling
let activeLenis = null
export function getActiveLenis() {
  return activeLenis
}

export default function SmoothScroll({ children }) {
  const rafId = useRef(null)

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    const lenis = new Lenis({
      duration: isCoarsePointer ? 0.9 : 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.1,
    })
    activeLenis = lenis
    document.documentElement.classList.add('has-lenis')

    function raf(time) {
      lenis.raf(time)
      rafId.current = requestAnimationFrame(raf)
    }
    rafId.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId.current)
      lenis.destroy()
      activeLenis = null
      document.documentElement.classList.remove('has-lenis')
    }
  }, [])

  return children
}
