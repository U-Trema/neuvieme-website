import { cva } from "class-variance-authority";

export const dropDownClasses = {
  container: cva([`border-gradient-purple overflow-hidden rounded-[8px] absolute -right-0 translate-y-[0px]`], {
    variants: {
      open: {
        true: 'fade-in-down',
        false: 'hidden'
      }
    }
  }),
  root: cva([`min-w-[250px] py-9 px-12 m-px bg-dark-primary text-text-primary rounded-[7px]`]),
  list: cva([`p-12 hover:bg-[#1F1C23] rounded-md [&:not(:last-child)]:mb-4 cursor-pointer transition-all duration-300 font-semibold text-sm text-nowrap gap-9`], {
    variants: {
      active: {
        true: 'flex justify-between items-center',
        false: ''
      }
    }
  }),
}
