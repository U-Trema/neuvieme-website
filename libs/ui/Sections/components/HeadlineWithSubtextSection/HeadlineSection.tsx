import {FC, ReactNode} from "react"
import {PrismicRichText} from "@prismicio/react"

import {observerCVA} from "@/styles/global.classes"

import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver"
import {headlineWithSubtextSectionClasses} from "./headline.section.classes"
import {combineClasses} from "../../../../utils/combineClasses"


type Props = any

const components = {
  heading1: ({ children }: { children: ReactNode }) => (<h1 className={combineClasses(headlineWithSubtextSectionClasses.title(), 'relative z-[2000]')}>{children}</h1>),
  p: ({ children }: { children: ReactNode }) => (<p className='leading-[150%] md:text-base'>{children}</p>),
}

export const HeadlineWithSubtextSection: FC<Props> = ({ slice }) => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0 0 0'
    }
  })
  const { title, subtitle } = slice?.primary || {}

  return (
    <section className={combineClasses(headlineWithSubtextSectionClasses.root())}>
      <div
        ref={elementRef}
        className={
          combineClasses(
            observerCVA.root({ isVisible: hasBeenVisible }),
            headlineWithSubtextSectionClasses.wrapper()
          )
        }
      >
        <PrismicRichText field={title} components={components}/>

        <PrismicRichText field={subtitle} components={components}/>
      </div>
    </section>
  )
}

HeadlineWithSubtextSection.displayName = "HeadlineWithSubtextSection"
