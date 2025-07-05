import React, {FC, ReactNode} from "react"
import {PrismicImage, PrismicRichText} from "@prismicio/react"

import {featuredCardSectionClasses} from "./featured-card.section.classes"
import {Button} from "../../../Button/Button"


type Props = any

const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={featuredCardSectionClasses.title()}>{children}</h2>),
  paragraph: ({ children }: { children: ReactNode }) => (<p className='text-sm'>{children}</p>),
}

export const FeaturedCardSection: FC<Props> = ({ slice }) => {
  const { project, button_link } = slice?.primary || {}

  return (
    <div className={featuredCardSectionClasses.wrapper()}>
      <div className='w-[55%] flex gap-40 items-center'>
        <div className='basis-[60%] aspect-video'>
          <PrismicImage className='w-full h-full object-cover block' field={project.data.project_main_image} />
        </div>
        <div className='basis-[40%]'>
          <PrismicRichText field={project.data.project_title} components={components}/>
          <PrismicRichText field={project.data.quote} components={components} />
          <div className='w-fit mt-12'>
            <Button label={button_link.text} variant='orange' as='a' href='#' />
          </div>
        </div>
      </div>
    </div>
  )
}

FeaturedCardSection.displayName = "FeaturedCardSection"
