import { useState, useEffect, useRef } from 'react';
import {useRouter} from "next/router";

export const useElementPosition = (width: number) => {
  const router = useRouter()
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
    if (router.route !== '/') return
    if (width < 768) return
    updatePositions();

    window.addEventListener('scroll', updatePositions);
    window.addEventListener('resize', updatePositions);

    return () => {
      window.removeEventListener('scroll', updatePositions);
      window.removeEventListener('resize', updatePositions);
    };
  }, [width]);

  return {
    elementRef,
    scrollInfo,
  };
};
