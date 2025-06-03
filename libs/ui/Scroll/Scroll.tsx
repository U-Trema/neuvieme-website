import React, {useEffect, useRef, useState} from 'react';
import styles from './scroll.module.css';

const SCROLLBAR_HEIGHT = 250

/**
 * need to be wrapped in an element with position: relative;
 * @constructor
 */
export const Scroll = () => {
  const parentRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!parentRef.current) return

    const canScroll = document.body.offsetHeight > window.innerHeight;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const maxTop = window.innerHeight - SCROLLBAR_HEIGHT;
      const position = scrollHeight > 0 ? (scrollTop / scrollHeight) * maxTop : 0;

      setScrollPosition(position);
    };

    if (canScroll) {
      window.addEventListener('scroll', handleScroll);
    } else {
      parentRef.current.style.display = 'none'
    }

    return () => {
      if (canScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [parentRef]);

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
  );
};
