import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Draggable } from 'gsap/dist/Draggable';
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { InertiaPlugin } from 'gsap/dist/InertiaPlugin';
import css from './super.module.css';

export const Super = () => {
  const container = useRef<any>(null);

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, InertiaPlugin);
  }

  useGSAP(() => {
    if (container.current) {
      ScrollTrigger.create({
        trigger: '#cool',
        pin: true, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=50', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: 'labels', // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        },
        markers: true
      })
    }
  });

  return (
    <div id='cool' className={css.cool}>
      <div id='super' className={css.super}>
        <ul style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: 'auto', padding: 0 }}>
          <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 1</li>
          <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 2</li>
          <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 3</li>
          <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 4</li>
          <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 5</li>
          <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 6</li>
        </ul>
      </div>
    </div>
  )
  // TODO use scroll trigger pour que ça marche au scroll tavu
  // return (
  //   <div id='cool' style={{ width: '100vw', height: '100vh', background: 'pink', overflow: 'auto', position: 'relative' }}>
  //     <div id='super' ref={container} style={{ background: 'darkviolet', width: '100%', height: '100%', position: 'relative', scale: 1.3, overflow: 'scroll', zIndex: 2000 }}>
  //       <ul style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: 'auto', padding: 0 }}>
  //         <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 1</li>
  //         <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 2</li>
  //         <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 3</li>
  //         <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 4</li>
  //         <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 5</li>
  //         <li style={{ border: "1px solid orange", width: 500, height: 500 }}>test 6</li>
  //       </ul>
  //     </div>
  //     <div style={{ position: 'fixed', bottom: 100, left: 500, zIndex: 2001 }}>
  //       <button onClick={() => container.current.style.scale = 1.5}>plus</button>
  //       <button onClick={() => container.current.style.scale = .8}>moins</button>
  //     </div>
  //   </div>
  // )
}
