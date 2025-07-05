import {FC, ReactNode} from "react"
import {PrismicRichText} from "@prismicio/react"

import {observerCVA} from "@/styles/global.classes"

import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver"
import {headlineWithSubtextSectionClasses} from "./headline.section.classes"
import {combineClasses} from "../../../../utils/combineClasses"


type Props = any

const components = {
  heading1: ({ children }: { children: ReactNode }) => (<h1 className={combineClasses(headlineWithSubtextSectionClasses.title(), 'relative z-[2000]')}>{children}</h1>),
  paragraph: ({ children }: { children: ReactNode }) => (<p className='leading-[150%] md:text-base'>{children}</p>),
}

export const HeadlineWithSubtextSection: FC<Props> = ({ slice }) => {
  const [ elementRef, hasBeenVisible, isIntersecting, entry ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0px 0px 0px'
    }
  })
  const { title, subtitle } = slice?.primary || {}

  return (
    <div className={headlineWithSubtextSectionClasses.root()}>
      <div
        ref={elementRef}
        className={
          combineClasses(
            entry?.intersectionRatio < 1 && observerCVA.root({ isVisible: hasBeenVisible }),
            headlineWithSubtextSectionClasses.wrapper()
          )
        }
      >
        <PrismicRichText field={title} components={components}/>

        <PrismicRichText field={subtitle} components={components}/>
      </div>
    </div>
  )
}

HeadlineWithSubtextSection.displayName = "HeadlineWithSubtextSection"
