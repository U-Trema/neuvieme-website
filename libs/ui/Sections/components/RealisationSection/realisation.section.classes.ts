import {cva} from "class-variance-authority";

export const realisationSectionClasses = {
  root: cva(['py-64 xl:py-[150px] px-24 md:ps-[138px] md:flex md:justify-between md:items-center md:gap-[60px] xl:gap-[150px]']),
  wrapper: cva(['h-fit relative z-[500] bg-dark-primary md:ps-12']),
  title: cva(['font-black leading-40 text-2xl mb-9']),
  imageMobile: cva(['my-24 md:hidden']),
  imageDesktop: cva(['hidden md:block basis-1/2 xl:basis-3/5 shrink-0'])
}
