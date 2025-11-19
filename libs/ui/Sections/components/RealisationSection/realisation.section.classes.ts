import {cva} from "class-variance-authority";

export const realisationSectionClasses = {
  root: cva(['py-32 xl:py-[150px] px-24 md:px-[0px] md:ps-[160px] md:flex md:justify-between md:items-center md:gap-[60px] xl:gap-[150px]'], {
    variants: {
      left: {
        true: 'flex-row-reverse !pr-40',
        false: '',
      }
    }
  }),
  wrapper: cva(['h-fit relative z-[500] md:ps-12']),
  title: cva(['font-semibold leading-[150%] text-lg mb-9']),
  imageMobile: cva(['my-24 md:hidden']),
  imageDesktop: cva(['hidden md:block basis-1/2 xl:basis-3/5 shrink-0 z-[200] aspect-[16/9]'])
}

export const socialsMediaRight = {
  root: cva(['hidden lg:block basis-1/2 xl:basis-3/5 shrink-0 z-[200] h-auto aspect-[16/9] box-content']),
  mobile: cva(['lg:hidden mt-64'])
}

export const media_right = {
  root: cva(['hidden md:block basis-1/2 xl:basis-3/5 shrink-0 z-[200] h-auto aspect-[16/9] box-content']),
  mobile: cva([]),
  media: cva(['w-full h-full aspect-4/3']),
  mediaMobile: cva([]),
}

export const media_right_grid = {
  root: cva(['hidden md:flex basis-1/2 xl:basis-3/5 gap-12 flex-wrap']),
  mobile: cva(['flex flex-col gap-12 mt-64 p-12 md:hidden']),
  media: cva(['basis-[calc(50%-12px)] aspect-4/3']),
  mediaMobile: cva([]),
}
