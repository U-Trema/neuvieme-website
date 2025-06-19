import React, {FC, ReactNode} from "react"
import {PrismicImage, PrismicRichText} from "@prismicio/react"

import {observerCVA} from "@/styles/global.classes"

import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver"
import {featuredCardSectionClasses} from "./featured-card.section.classes"
import {combineClasses} from "../../../../utils/combineClasses"
import {realisationSectionClasses} from "../RealisationSection/realisation.section.classes"
import {Button} from "../../../Button/Button"


type Props = any

const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={combineClasses(featuredCardSectionClasses.title(), 'relative z-[2000]')}>{children}</h2>),
  p: ({ children }: { children: ReactNode }) => (<p className='leading-[150%] md:text-base'>{children}</p>),
}

export const FeaturedCardSection: FC<Props> = ({ slice }) => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0 0 0'
    }
  })
  const { project, button_link } = slice?.primary || {}
  console.log({ slice })
  const medias = [project.data.project_main_image].concat(...project.data.medias.map(({image}) => image))
  console.log({ medias })

  return (
    <section className={combineClasses(featuredCardSectionClasses.root())}>
      <div
        ref={elementRef}
        className={
          combineClasses(
            observerCVA.root({ isVisible: hasBeenVisible }),
            featuredCardSectionClasses.wrapper()
          )
        }
      >
        <div className={
          combineClasses(
            realisationSectionClasses.imageDesktop(),
            observerCVA.root({ isVisible: hasBeenVisible }))
        }>
          {medias.map((image, index) => (
            <PrismicImage className='w-full h-full object-cover block' key={index} field={image} />
          ))}
        </div>
        <div>
          <PrismicImage className='w-full h-full object-cover block' field={project.data.project_main_image} />
          <PrismicRichText field={project.data.project_title} components={components}/>
          <Button label={button_link.text} variant='orange' as='a' href='#' />
        </div>
      </div>
    </section>
  )
}

FeaturedCardSection.displayName = "FeaturedCardSection"
