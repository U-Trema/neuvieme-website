import {cva} from "class-variance-authority";

export const videoClasses = {
  root: cva(['aspect-video w-full md:h-[90vh] object-cover'], {
    variants: {
      autoHeight: {
        true: '!h-auto',
        false: ''
      },
      aspectSquare: {
        true: '!h-[100%] aspect-square',
        false: ''
      }
    }
  })
}
