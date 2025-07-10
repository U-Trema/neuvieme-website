import { cva } from 'class-variance-authority'

export const galleryOverviewSectionClasses = {
  root: cva(['py-64 xl:py-[150px] md:ps-[160px] md:flex md:justify-between md:items-center md:gap-[60px] xl:gap-[150px]',]),
  wrapper: cva(['w-full h-fit relative z-[500] md:pl-[172px] md:ps-12 flex justify-end md:pr-24',]),
  title: cva(['text-base mb-4']),
  gallery: cva(['grid gap-4'], {
    variants: {
      variation: {
        default: 'grid-cols-3',
        '5X1': 'grid-cols-5',
        '1X1': 'grid-cols-1',
        '2X1': 'grid-cols-2',
        '2X2': 'grid-cols-2 grid-rows-2',
      },
    },
    defaultVariants: {
      variation: 'default',
    },
  }),
}
