import {cva} from "class-variance-authority";

export const loader = {
  root: cva(['bg-dark-primary w-[100vw] h-[100vh] absolute z-[3000]'],),
  wrapperParent: cva(['w-[100vw] h-[100vh] absolute z-[3000] bg-dark-primary top-[0] left-[0] opacity-100 flex items-center justify-center']),
  wrapper: cva(['rounded-[100%] w-[485px] h-[485px] flex items-center justify-center']),
  loader: cva(['bg-dark-primary w-[483px] h-[483px] rounded-[100%] flex items-center justify-center']),
  logo: cva(['absolute top-[50%] left-[50%] z-[5000] -translate-x-1/2 -translate-y-1/2'])
}
