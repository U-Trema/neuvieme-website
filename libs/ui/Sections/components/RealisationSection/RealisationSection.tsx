import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver";
import {realisationSectionClasses} from "./realisation.section.classes";
import {Button} from "../../../Button/Button";
import {observerCVA} from "@/styles/global.classes";
import {combineClasses} from "../../../../utils/combineClasses";
import {FC} from "react";

type Props = {
  title: string
  description: string
  btn: string
  link: string
  image: string
}

export const RealisationSection: FC<Props> = ({ title, description, btn, link, image }) => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0px 0px 0px'
    }
  })

  return (
    <section className={combineClasses(realisationSectionClasses.root())}>
      <div
        ref={elementRef}
        className={
          combineClasses(
            observerCVA.root({ isVisible: hasBeenVisible }),
            realisationSectionClasses.wrapper()
          )
        }
      >
        <h2 className={combineClasses(realisationSectionClasses.title(), 'relative z-[2000]')}>
          {title}
        </h2>

        <p className='leading-[150%] md:text-base'>
          {description}
        </p>

        <div className={realisationSectionClasses.imageMobile()}>
          <img
            className='w-full h-full object-cover block'
            src={image}
            alt="alt"
          />
        </div>

        <div className='flex justify-end md:mt-24'>
          <Button label={btn} href={link} variant='violet' />
        </div>
      </div>

      <div
        className={
          combineClasses(
            realisationSectionClasses.imageDesktop(),
            observerCVA.root({ isVisible: hasBeenVisible })
          )
        }
      >
        <img
          className='w-full h-full object-cover block'
          src={image}
          alt="alt"
        />
      </div>
    </section>
  )
}
