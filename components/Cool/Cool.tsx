import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./ScrollDragContainer.module.css";

export const Cool = () => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Register GSAP Observer plugin

    const loadGSAP = async () => {
      const {ScrollTrigger} = await import('gsap/ScrollTrigger');
      const {Observer} = await import('gsap/Observer');
      const {Draggable} = await import('gsap/Draggable');
      const {Flip} = await import('gsap/Flip');
      const {InertiaPlugin} = await import('gsap/InertiaPlugin');
      gsap.registerPlugin(Observer);

      const container = containerRef.current;
      const sections = container.querySelectorAll(".section");
      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      let maxTranslate = -(totalWidth - viewportWidth);
      let currentX = 0;

      // Function to update container position
      const updatePosition = (deltaX) => {
        currentX = gsap.utils.clamp(maxTranslate, 0, currentX + deltaX);
        gsap.to(container, {
          x: currentX,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      // Initialize Observer
      const observer = Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        onDrag: (self) => {
          updatePosition(self.deltaX * 2);
        },
        onWheel: (self) => {
          updatePosition(self.deltaY * -2); // Map vertical wheel to horizontal
        },
        onPress: () => {
          gsap.killTweensOf(container);
        },
        dragMinimum: 5,
        preventDefault: true,
      });

      // Handle window resize
      const handleResize = () => {
        const newViewportWidth = window.innerWidth;
        maxTranslate = -(totalWidth - newViewportWidth);
        currentX = gsap.utils.clamp(maxTranslate, 0, currentX);
        gsap.to(container, {x: currentX, duration: 0.3});
      };
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        observer.disable();
        window.removeEventListener("resize", handleResize);
      };
    }

    loadGSAP()
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.section}>Section 1</div>
      <div className={styles.section}>Section 2</div>
      <div className={styles.section}>Section 3</div>
    </div>
  );
}
