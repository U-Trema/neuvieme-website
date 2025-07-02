import React, {useEffect, useRef, useState} from 'react'
import styles from './scroll.module.css'
import {useViewportSize} from "@mantine/hooks"

const SCROLLBAR_HEIGHT = 250

/**
 * need to be wrapped in an element with position: relative
 * @constructor
 */
export const Scroll = () => {
  const { width } = useViewportSize()
  const parentRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (width < 768) return
    if (!parentRef.current) return

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const maxTop = window.innerHeight - SCROLLBAR_HEIGHT
      const position = scrollHeight > 0 ? (scrollTop / scrollHeight) * maxTop : 0

      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [parentRef, width])

  return (
    <div
      ref={parentRef}
      className={styles.scroll}
    >
      <div
        style={{
          height: SCROLLBAR_HEIGHT,
          top: `${scrollPosition}px`
        }}
        className={styles.innerScroll}
      />
    </div>
  )
}
