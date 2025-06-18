import {FC, ReactNode} from "react";
import {PrismicRichText} from "@prismicio/react";

import {observerCVA} from "@/styles/global.classes";

import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver";
import {realisationSectionClasses} from "./realisation.section.classes";
import {Button} from "../../../Button/Button";
import {combineClasses} from "../../../../utils/combineClasses";


type Props = any

const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={combineClasses(realisationSectionClasses.title(), 'relative z-[2000]')}>{children}</h2>),
  p: ({ children }: { children: ReactNode }) => (<p className='leading-[150%] md:text-base'>{children}</p>),
};

export const RealisationSection: FC<Props> = ({ slice }) => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0 0 0'
    }
  })
  const { title, description, medias = [], cta } = slice?.primary || {};

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
        <PrismicRichText field={title} components={components}/>

        <PrismicRichText field={description} components={components}/>

        <div className={realisationSectionClasses.imageMobile()}>
          {medias.map((image, index) => (
            <img
              key={index}
              className='w-full h-full object-cover block'
              src={image.url}
              alt={image.alt || "Realisation image"}
            />
          ))}
        </div>

        {cta?.text && (
          <div className='flex justify-end md:mt-24'>
            <Button label={cta.text} href={cta.href} variant='violet' />
          </div>
        )}
      </div>

      <div className={
        combineClasses(
          realisationSectionClasses.imageDesktop(),
          observerCVA.root({ isVisible: hasBeenVisible }))
      }>
        {medias.map((image, index) => (
          <img
            key={index}
            className='w-full h-full object-cover block'
            src={image.url}
            alt={image.alt || "Realisation image"}
          />
        ))}
      </div>
    </section>
  )
}

RealisationSection.displayName = "RealisationSection";
