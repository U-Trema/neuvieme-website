import {FC, ReactNode} from "react"
import {PrismicRichText} from "@prismicio/react"

import {observerCVA} from "@/styles/global.classes"

import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver"
import {highlightedHeadingSectionClasses} from "./highlighted-heading.section.classes"
import {combineClasses} from "../../../../utils/combineClasses"
import {GradientText} from "../../../GradientText/GradientText";


type Props = any

const components = {
  heading1: ({ children }: { children: ReactNode }) => (<h2 className={combineClasses(highlightedHeadingSectionClasses.title(), 'relative z-[2000]')}><GradientText>{children}</GradientText></h2>),
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={combineClasses(highlightedHeadingSectionClasses.title(), 'relative z-[2000]')}><GradientText>{children}</GradientText></h2>),
  paragraph: ({ children }: { children: ReactNode }) => (<p className='leading-[150%] text-base'>{children}</p>),
}

const componentsDescription = {
  paragraph: ({ children }: { children: ReactNode }) => (<p className='leading-[150%] text-base'>{children}</p>),

}

export const HighlightedHeadingSection: FC<Props> = ({ slice }) => {
  const [ elementRef, hasBeenVisible, entry ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0px 0px 0px'
    }
  })
  const { project, description, subtitle, title } = slice?.primary || {}
  console.log(description)

  return (
    <div
      ref={elementRef}
      className={
        combineClasses(
          entry?.intersectionRatio < 1 && observerCVA.root({ isVisible: hasBeenVisible }),
          highlightedHeadingSectionClasses.root()
        )
    }
    >
      <div className={highlightedHeadingSectionClasses.wrapper()}>
        <PrismicRichText field={title.length ? title : project.data?.project_title} components={components}/>
        <p className='leading-[150%] md:text-base'>{subtitle.length ? subtitle : project.data?.client_name}</p>
      </div>

      <div className={highlightedHeadingSectionClasses.wrapper()}>
        { description.length ?
          <PrismicRichText field={description} components={components}/>:
          <p className='leading-[150%] md:text-base mt-24 md:mt-0'>{project.data?.subtitle}</p>
        }
      </div>
    </div>
  )
}

HighlightedHeadingSection.displayName = "HighlightedHeadingSection"
