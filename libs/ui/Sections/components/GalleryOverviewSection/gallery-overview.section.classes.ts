import { cva } from 'class-variance-authority'

export const galleryOverviewSectionClasses = {
  root: cva(['py-64 xl:py-[150px] md:ps-[160px] md:flex md:justify-between md:items-center md:gap-[60px] xl:gap-[150px]',]),
  wrapper: cva(['w-full h-fit relative z-[500] md:pl-[172px] md:ps-12 flex justify-end md:pr-24',]), // TODO supprimer ça ?
  title: cva(['text-base mb-4']), // TODO supprimer ça ?
  gallery: cva([''], {
    variants: {
      variation: {
        default: 'block',
        '5X1': 'grid-cols-5',
        '1X1': 'grid gap-4 grid-cols-1',
        '2X1': 'grid gap-4 grid-cols-2',
        '2X2': 'grid gap-4 grid-cols-12 grid-row-4 md:grid-rows-[360px_280px] md:pl-[172px] md:pr-24 mb-160 gap-16',
        '3X1': ''
      },
    },
    defaultVariants: {
      variation: 'default',
    },
  }),
}

export const galleryOverview2x2SectionClasses = {
  root: cva([], {
    variants: {
      variation: {
        '5cols': 'col-span-12 md:col-span-6 lg:col-span-5',
        '7cols': 'col-span-12 md:col-span-6 lg:col-span-7'
      }
    }
  })
}
