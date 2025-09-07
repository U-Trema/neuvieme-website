import { useRef, useState } from "react";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";
import gsap from "gsap";
import { Assiettes } from "../../components/Assiettes";

const Super = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(0);

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  useGSAP(() => {
    if (ref.current) {
      // Draggable.create('.containerr', {
      // bounds: {top: 50, left: 100, width: 100, height: 100},
      Draggable.create('.dragg', {
        bounds: '.containerr',
        inertia: true,
        edgeResistance: 0.8,
        dragClickables: false
      })
    }
  });

  const plus = (val: number) => {
    if (ref?.current) {
      setZoom(zoom + val)
      ref.current.style.transform = `perspective(50px) translate3d(0px, 0px, ${zoom}px)`
    }
  }

  const moins = (val: number) => {
    if (ref?.current) {
      setZoom(zoom - val)
      ref.current.style.transform = `perspective(50px) translate3d(0px, 0px, -${zoom}px)`
    }
  }

  console.log('zoom', zoom)
  return (
    <div id='ab' className='ppp' style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: 'orange' }}>
      <div className='containerr' style={{ width: '100%', height: '100%' }}>
        <div
          className='dragg'
          ref={ref}
          style={{
            background: 'violet',
            transition: '.3s ease-in',
            // width: '100%',
            width: 'calc(150vw + 30vw)',
            height: '160vh',
            transform: `perspective(50px) translate3d(0px, 0px, ${zoom}px)`,
        }}
        >
          <div style={{ paddingTop: '0px' }} />
          <Assiettes />
          {/*<div style={{ paddingTop: '300px' }} />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <hr/><hr/><hr/><hr/>
          <button onClick={() => plus(5)}>click</button>
          <div style={{ marginTop: '300px' }} />

          <div data-clickable="true" style={{ marginLeft: '250px' }} onClick={() => moins(5)}>moins</div>
          <div data-clickable="true" style={{ marginLeft: '250px' }} onClick={() => plus(5)}>plus</div>
          <div style={{ position: 'absolute', top: '50%', left: '50%' }}>{JSON.stringify(zoom)}</div>*/}
        </div>
      </div>
    </div>
  )
}

export default Super
