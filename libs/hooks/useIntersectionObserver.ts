import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (options: any = {}) => {
  const elementRef: any = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;
    if (typeof window === 'undefined') return;
    if (isIntersecting) return;

    const handleIntersection = (entries: any) => {
      const entry = entries[0];

      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);
      if (entry.isIntersecting && !hasBeenVisible) {
        setHasBeenVisible(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: options.threshold || 0,
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [options.threshold, options.root, options.rootMargin]);

  return [elementRef, hasBeenVisible, isIntersecting, entry];
};
