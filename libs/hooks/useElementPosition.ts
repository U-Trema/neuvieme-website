import { useState, useEffect, useRef } from 'react';

export const useElementPosition = () => {
  const elementRef = useRef<any>(null);

  const [scrollInfo, setScrollInfo] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  const updatePositions = () => {
    setScrollInfo({
      scrollX: window.pageXOffset || window.scrollX,
      scrollY: window.pageYOffset || window.scrollY,
    });
  };

  useEffect(() => {
    updatePositions();

    window.addEventListener('scroll', updatePositions);
    window.addEventListener('resize', updatePositions);

    return () => {
      window.removeEventListener('scroll', updatePositions);
      window.removeEventListener('resize', updatePositions);
    };
  }, []);

  return {
    elementRef,
    scrollInfo,
  };
};
