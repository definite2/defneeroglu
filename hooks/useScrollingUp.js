import { useEffect, useState } from 'react'
import { off, on } from 'lib/ui'
/**
 * useScrollingUp
 * @returns {boolean}
 */
const useScrollingUp = () => {
  let prevScroll
  //if it is SSR then check you are now on the client and window object is available
  if (typeof window === undefined) {
    prevScroll = window.pageYOffset
  }
  const [scrollingUp, setScrollingUp] = useState(false)
  const handleScroll = () => {
    const currScroll = window.pageYOffset
    const isScrolled = prevScroll > currScroll
    setScrollingUp(currScroll === 0 ? false : isScrolled)
    prevScroll = currScroll
  }
  useEffect(() => {
    on(window, 'scroll', handleScroll, { passive: true })
    return () => {
      off(window, 'scroll', handleScroll, { passive: true })
    }
  }, [])
  return scrollingUp
}

export default useScrollingUp
