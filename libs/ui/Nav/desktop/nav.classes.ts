import {cva} from "class-variance-authority";

export const navClasses = {
  root: cva(['p-40 flex justify-between text-sm z-[1O000]'], {
    variants: {
      index: {
        true: 'fixed top-0 w-full bg-transparent z-[10000] animate-bg',
        false: 'sticky top-0 bg-dark-primar z-[10000]'
      }
    }
  })
}
