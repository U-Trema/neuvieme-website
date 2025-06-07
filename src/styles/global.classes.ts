import {cva} from "class-variance-authority";

export const observerCVA = {
  root: cva(['transition-all duration-2000 ease-in-out'], {
    variants: {
      isVisible: {
        true: 'opacity-100 transform translate-y-0',
        false: 'opacity-0 transform translate-y-14'
      }
    }
  })
}
