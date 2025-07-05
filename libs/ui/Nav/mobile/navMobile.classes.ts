import {cva} from "class-variance-authority";

export const navMobileClasses = {
  wrapper: cva([`
    before:transition-all before:duration-300 before:ease-in-out
    before:block before:absolute before:top-[0] before:-left-full
    before:w-full before:h-full before:bg-dark-primary
    `], {
    variants: {
      index: {
        true: 'fixed t-0 w-full z-[2100]',
        false: ''
      },
      open: {
        true: 'before:left-[0] before:z-[1900]',
        false: 'before:bg-transparent'
      }
    }
  }),
  root: cva(['px-24 w-full z-[1900] transition-all duration-300 ease-in-out'], {
    variants: {
      open: {
        true: 'translate-[0%] relative',
        false: '-translate-x-[200%] absolute'
      }
    }
  }),
  link: cva(['text-center text-text-primary text-2rem uppercase font-black transition-all delay-150 duration-450 ease-in-out cursor-pointer'], {
    variants: {
      open: {
        true: 'opacity-100 translate-none',
        false: 'opacity-0 -translate-x-[200%]'
      }
    }
  })
}

export const navLinkClasses = {
  root: cva(['w-full size-dvh pt-[80px] transition-all duration-450 ease-in-out'], {
    variants: {
      open: {
        true: '-translate-x-[0%]',
        false: '-translate-x-[200%]'
      }
    }
  })
}
