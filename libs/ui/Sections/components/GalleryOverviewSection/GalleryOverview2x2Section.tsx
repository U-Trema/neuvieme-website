import React, {FC, ReactNode} from "react"
import {PrismicImage, PrismicRichText} from "@prismicio/react"

import {galleryOverviewSectionClasses} from "./gallery-overview.section.classes"


type Props = any

const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={galleryOverviewSectionClasses.title()}>{children}</h2>),
  paragraph: ({ children }: { children: ReactNode }) => (<p className='text-sm'>{children}</p>),
}

export const GalleryOverview2x2Section: FC<Props> = ({ slice }) => {
  const { root, wrapper, title, gallery } = galleryOverviewSectionClasses;

  // TODO => ici il manque le projet qu'il faut fetch
  console.log('%cnique tout', 'color: lime; font-size: 12px;', slice)
  // const { project, button_link } = slice?.primary || {}

  return (
    <div>
      GalleryOverview2x2Section
    </div>
  )
}

GalleryOverview2x2Section.displayName = "GalleryOverview2x2Section"
