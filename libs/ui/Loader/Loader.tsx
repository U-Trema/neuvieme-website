import { gsap } from "gsap"
import {useEffect, useRef} from "react";
import {Logo} from "../icons/Logo";
import {loader} from "./loader.classes";
import {combineClasses} from "../../utils/combineClasses";

export const Loader = ({ onComplete }: { onComplete: (arg0: boolean) => void }) => {
  const ref = useRef(null)
  const other = useRef(null)
  const loadingRef = useRef(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const loaderTlRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (tlRef.current) {
      tlRef.current.kill();
    }
    if (loaderTlRef.current) {
      loaderTlRef.current.kill();
    }

    const tl = gsap.timeline({ repeat: 0 });
    const loaderTl = gsap.timeline({ repeat: 0 });
    tlRef.current = tl;
    loaderTlRef.current = loaderTl;

    if (ref.current) {
      document.body.style.overflowY = 'hidden'
      tl
        .fromTo(
          loadingRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 0.5,
            onComplete: () => { loaderTl.kill() },
          },
          '+=2'
        )
        .fromTo(
          other.current,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 1.5,
            zIndex: -1,
            overwrite: "auto",
            onComplete: () => {
              document.body.style.overflowY = "auto";
              onComplete(true);
            },
          },
          2
        );
    }
    if (loadingRef.current) {
      loaderTl.fromTo(
        loadingRef.current,
        { rotation: 0 },
        { rotation: 360, duration: 1.2, repeat: -1, ease: 'none' }
      )
    }

    return () => {
      if (tlRef.current) tlRef.current.kill();
      if (loaderTlRef.current) loaderTlRef.current.kill();
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div ref={other} className={loader.root()}>
      <div className={loader.wrapperParent()} id='loader' ref={ref}>
        <div
          ref={loadingRef}
          className={combineClasses(loader.wrapper(), 'loader-circle')}
        >
          <div className={loader.loader()} />
        </div>

        <div className={loader.logo()}>
          <Logo width="" height="" classnames='!w-[100%] md:w-[375px]'/>
        </div>
      </div>
    </div>
  )
}
