import {FC, ReactNode} from "react"
import {PrismicImage, PrismicRichText} from "@prismicio/react"

import {observerCVA} from "@/styles/global.classes"

import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver"
import {highlightedHeadingSectionClasses} from "./highlighted-heading.section.classes"
import {combineClasses} from "../../../../utils/combineClasses"
import {realisationSectionClasses} from "../RealisationSection/realisation.section.classes"


type Props = any

const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={combineClasses(highlightedHeadingSectionClasses.title(), 'relative z-[2000]')}>{children}</h2>),
  p: ({ children }: { children: ReactNode }) => (<p className='leading-[150%] md:text-base'>{children}</p>),
}

export const HighlightedHeadingSection: FC<Props> = ({ slice }) => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0 0 0'
    }
  })
  const { project } = slice?.primary || {}

  return (
    <section className={combineClasses(highlightedHeadingSectionClasses.root())}>
      <div
        ref={elementRef}
        className={
          combineClasses(
            observerCVA.root({ isVisible: hasBeenVisible }),
            highlightedHeadingSectionClasses.wrapper()
          )
        }
      >
        <PrismicRichText field={project.data.project_title} components={components}/>
        <p className='leading-[150%] md:text-base'>{project.data.client_name}</p>
      </div>
      <div className={
        combineClasses(
          highlightedHeadingSectionClasses.text(),
          observerCVA.root({ isVisible: hasBeenVisible }))
      }>
        <p className='leading-[150%] md:text-base'>{project.data.subtitle}</p>
        <PrismicRichText field={project.data.quote} components={components}/>
      </div>
    </section>
  )
}

HighlightedHeadingSection.displayName = "HighlightedHeadingSection"
