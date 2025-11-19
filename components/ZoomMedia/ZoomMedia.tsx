import {forwardRef, ReactNode, Ref} from "react";

type Props = {
  children: ReactNode
  fullscreen: boolean
}

export const ZoomMedia = forwardRef((props: Props, ref: Ref<HTMLDivElement>) => {
  const full = props.fullscreen
    ? `fixed top-[144px] left-0 z-[999] h-[calc(100vh-144px)] w-full transition-opacity duration-300 ${props.fullscreen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`
    : 'relative w-full h-full'

  return (
    <div ref={ref} className={full}>
      {props.children}
    </div>
  )
})

ZoomMedia.displayName = 'ZoomComponent';
