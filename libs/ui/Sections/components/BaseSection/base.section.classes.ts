import {cva} from "class-variance-authority";

export const baseSectionClasses = {
  root: cva(['relative z-[200] py-[160px] px-24 md:px-[0px] md:pl-[180px] xl:pl-[240px] xl:pt-[240px] xl:w-[1280px]']),
  wrapper: cva(['xl:flex xl:gap-[80px]']),
  title: cva(['text-2xl lg:text-2rem pb-24 leading-[150%]'])
}
