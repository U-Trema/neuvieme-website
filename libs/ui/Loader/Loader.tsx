import { gsap } from "gsap"
import {useEffect, useRef} from "react";
import {Logo} from "../icons/Logo";
import {loader} from "./loader.classes";
import {combineClasses} from "../../utils/combineClasses";

export const Loader = ({ onComplete }: { onComplete: (arg0: boolean) => void }) => {
  const tl = gsap.timeline({ repeat: 0 });
  const loaderTl = gsap.timeline({ repeat: 0 });

  const ref = useRef(null)
  const other = useRef(null)
  const loadingRef = useRef(null)

  useEffect(() => {
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
      tl.kill();
      loaderTl.kill();
    };
  }, [ref, other, loadingRef]);

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
          <Logo width="375" height=""/>
        </div>
      </div>
    </div>
  )
}
