import {cva} from "class-variance-authority";

export const headlineWithSubtextSectionClasses = {
  root: cva([`px-24 py-32 xl:pt-120 xl:pb-160 md:ps-160`]),
  wrapper: cva(['h-fit relative z-[500] md:ps-12 basis-1/2']),
  title: cva(['font-black leading-40 text-2xl mb-12']),
}
