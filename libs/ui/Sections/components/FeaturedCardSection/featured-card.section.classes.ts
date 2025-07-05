import {cva} from "class-variance-authority"

export const featuredCardSectionClasses = {
  root: cva(['py-64 xl:py-[150px] md:ps-[160px] md:flex md:justify-between md:items-center md:gap-[60px] xl:gap-[150px]']),
  wrapper: cva(['h-fit relative z-[500] md:ps-12 flex justify-end']),
  title: cva(['text-base mb-4']),
}
