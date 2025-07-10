import { ReactNode, memo, FC } from "react"
import { PrismicRichText } from "@prismicio/react"

import { observerCVA } from "@/styles/global.classes"

import { baseSectionClasses } from "./base.section.classes"
import { Button } from "../../../Button/Button"
import { useIntersectionObserver } from "../../../../hooks/useIntersectionObserver"
import { combineClasses } from "../../../../utils/combineClasses"
import {prismicToNextColor} from "../../../../utils/btnColor";


const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className="inline text-3xl font-bold">{children}</h2>),
  strong: ({ children }: { children: ReactNode }) => (<strong className="font-black">{children}</strong>),
}

export const BaseSection: FC<any> = memo(({ slice }) => {
  const [elementRef, hasBeenVisible] = useIntersectionObserver({
    options: {
      rootMargin: "80px 0 0 0",
    },
  })
  console.log({prim: slice?.primary})

  const { eyebrow, headline, cta, button_link, button_color } = slice.primary || {}

  return (
    <section className={baseSectionClasses.root()}>
      <div ref={elementRef} className={combineClasses(baseSectionClasses.wrapper(), observerCVA.root({ isVisible: hasBeenVisible }))}>
        {eyebrow && (
          <span className="block pb-16 text-lg text-nowrap">{eyebrow}</span>
        )}

        <div>
          {headline && (
            <div className={baseSectionClasses.title()}>
              <PrismicRichText field={headline} components={components} />
            </div>
          )}

          {button_link?.text && (
            <div className="w-fit">
              <Button label={button_link.text} href={button_link.href} variant={prismicToNextColor(button_color)} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
})

BaseSection.displayName = "BaseSection"
