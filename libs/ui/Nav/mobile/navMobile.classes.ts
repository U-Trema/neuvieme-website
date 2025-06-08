import {cva} from "class-variance-authority";

export const navMobileClasses = {
  root: cva(['px-24 py-32 w-full transition-all duration-300 ease-in-out'], {
    variants: {
      index: {
        true: 'fixed top-0 z-[2000]',
        false: 'sticky top-0'
      },
      open: {
        true: 'bg-dark-primary size-dvh',
        false: 'bg-transparent'
      }
    }
  }),
  link: cva(['text-center text-text-primary text-2rem uppercase font-black transition-all delay-150 duration-450 ease-in-out cursor-pointer'], {
    variants: {
      open: {
        true: 'opacity-100 translate-none',
        false: 'opacity-0 translate-x-[200%]'
      }
    }
  })
}

export const navLinkClasses = {
  root: cva(['w-full size-dvh pt-[80px] transition-all duration-450 ease-in-out'], {
    variants: {
      open: {
        true: 'translate-none',
        false: 'translate-x-[200%]'
      }
    }
  })
}
