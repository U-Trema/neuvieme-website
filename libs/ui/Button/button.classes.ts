import {cva} from "class-variance-authority";

const containerCompoundClasses = [
  {
    variant: 'orange',
    class: `conic-orange-btn trigger-animate-orange-button`,
  },
  {
    variant: 'violet',
    class: `conic-violet-btn trigger-animate-violet-button`,
  },
  {
    variant: 'pink',
    class: `conic-pink-btn trigger-animate-pink-button`,
  },
  {
    variant: 'red',
    class: `conic-red-btn trigger-animate-red-button`,
  },
  {
    variant: 'yellowDark',
    class: `conic-yellow-dark-btn trigger-animate-yellow-dark-button`,
  },
  {
    variant: 'yellow',
    class: `conic-yellow-btn trigger-animate-yellow-button`,
  }
] as const;

const rootCompoundClasses = [
  {
    variant: 'orange',
    class: 'focus:bg-btn-orange-focus'
  },
  {
    variant: 'violet',
    class: 'focus:bg-btn-violet-focus'
  },
  {
    variant: 'pink',
    class: 'focus:bg-btn-pink-focus'
  },
  {
    variant: 'red',
    class: 'focus:bg-btn-red-focus'
  },
  {
    variant: 'yellowDark',
    class: 'focus:bg-btn-yellow-dark-focus'
  },
  {
    variant: 'yellow',
    class: 'focus:bg-btn-yellow-focus'
  }
] as const

export const buttonClasses = {
  root: cva([`relative block rounded-[198px] z-1 m-px px-12 py-9 bg-dark-primary text-text-primary cursor-pointer transition-colors duration-300 ease-in-out`], {
    variants: {
      variant: {
        orange: '',
        violet: '',
        pink: '',
        red: '',
        yellow: '',
        yellowDark: ''
      }
    },
    compoundVariants: [...rootCompoundClasses]
  }),
  container: cva([`relative inline-block rounded-[200px] overflow-hidden shadow-transparent`], {
    variants: {
      variant: {
        orange: '',
        violet: '',
        pink: '',
        red: '',
        yellow: '',
        yellowDark: ''
      }
    },
    compoundVariants: [...containerCompoundClasses]
  }),
  gradient: cva(['absolute inset-0 cursor-pointer z-0']),
}
