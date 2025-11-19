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
    class: 'active:bg-btn-orange-focus'
  },
  {
    variant: 'violet',
    class: 'active:bg-btn-violet-focus'
  },
  {
    variant: 'pink',
    class: 'active:bg-btn-pink-focus'
  },
  {
    variant: 'red',
    class: 'active:bg-btn-red-focus'
  },
  {
    variant: 'yellowDark',
    class: 'active:bg-btn-yellow-dark-focus'
  },
  {
    variant: 'yellow',
    class: 'active:bg-btn-yellow-focus'
  }
] as const

const isActiveCompoundClasses = rootCompoundClasses.map(compoundClass => ({
  ...compoundClass,
  isActive: true,
  class: compoundClass.class.replace('active:', '')
}))

export const buttonClasses = {
  root: cva([`relative block rounded-[198px] z-1 m-px px-12 py-9 bg-dark-primary text-text-primary cursor-pointer ease-in-out select-none items-center`], {
    variants: {
      variant: {
        orange: '',
        violet: '',
        pink: '',
        red: '',
        yellow: '',
        yellowDark: ''
      },
      withRightIcon: {
        true: 'flex gap-[4px]',
        false: ''
      },
      isActive: {
        true: '',
        false: '',
      },
      rounded: {
        true: 'py-12',
        false: 'py-9'
      }
    },
    compoundVariants: [
      ...rootCompoundClasses,
      ...isActiveCompoundClasses
    ]
  }),
  container: cva([`relative block rounded-[200px] overflow-hidden shadow-transparent`], {
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
  })
}
