import {cva} from "class-variance-authority";

export const headlineWithSubtextSectionClasses = {
  root: cva([`md:ps-[160px]`]),
  wrapper: cva(['h-fit relative z-[500] md:ps-12 basis-1/2']),
  title: cva(['font-black leading-40 text-2xl mb-9']),
}
