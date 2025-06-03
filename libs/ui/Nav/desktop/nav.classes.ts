import {cva} from "class-variance-authority";

export const navClasses = {
  root: cva(['p-40 flex justify-between text-sm z-[200]'], {
    variants: {
      index: {
        true: 'fixed top-0 w-full bg-transparent z-50 animate-bg',
        false: 'sticky top-0 bg-dark-primary'
      }
    }
  })
}
