import React, {FC, ReactNode} from "react"
import {PrismicImage, PrismicRichText} from "@prismicio/react"

import {featuredCardSectionClasses} from "./featured-card.section.classes"
import {Button} from "../../../Button/Button"
import {prismicToNextColor} from "../../../../utils/btnColor";


type Props = any

const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={featuredCardSectionClasses.title()}>{children}</h2>),
  paragraph: ({ children }: { children: ReactNode }) => (<p className='text-sm'>{children}</p>),
}

export const FeaturedCardSection: FC<Props> = ({ slice }) => {
  const { project, button_link, button_color } = slice?.primary || {}

  return (
    <div className={featuredCardSectionClasses.wrapper()}>
      <div className='md:w-[100%] lg:w-[75%] flex flex-col lg:flex-row gap-40 items-center'>
        <div className='w-full h-full lg:basis-[60%] aspect-video'>
          <PrismicImage className='w-full h-full object-cover block' field={project.data?.project_main_image} />
        </div>

        <div className='w-full flex justify-between lg:basis-[40%] lg:flex-col xl:flex-row md:pr-0'>
          <div>
            <PrismicRichText field={project.data?.project_title} components={components}/>
            <PrismicRichText field={project.data?.quote} components={components} />
          </div>
          <div className='md:w-fit md:mt-12'>
            <Button label={button_link?.text} variant={prismicToNextColor(button_color)} as='a' href={`/publicite/${project.uid}`} classnames='w-max' />
          </div>
        </div>
      </div>
    </div>
  )
}

FeaturedCardSection.displayName = "FeaturedCardSection"
