import {cva} from "class-variance-authority";

export const highlightedHeadingSectionClasses = {
  root: cva(['px-24 md:px-0 pt-80 pb-40 md:ps-160 md:pt-120 md:pr-24 md:pb-160 md:flex md:justify-between md:items-center md:gap-[60px] xl:gap-[200px] xl:pr-80']),
  wrapper: cva(['h-fit relative z-[500] md:ps-12 basis-1/2 self-start']),
  title: cva(['font-black leading-40 text-2xl mb-9']),
  text: cva(['md:block basis-1/2 xl:basis-3/5 shrink-0 z-[200]'])
}
