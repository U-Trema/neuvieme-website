import React, {FC, ReactNode} from "react"
import {PrismicImage, PrismicRichText} from "@prismicio/react"

import {galleryOverviewSectionClasses} from "./gallery-overview.section.classes"


type Props = any

const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={galleryOverviewSectionClasses.title()}>{children}</h2>),
  paragraph: ({ children }: { children: ReactNode }) => (<p className='text-sm'>{children}</p>),
}

export const GalleryOverview5x1Section: FC<Props> = ({ slice }) => {
  const { root, wrapper, title, gallery } = galleryOverviewSectionClasses;

  console.log({ p: slice?.primary })
  // const { project, button_link } = slice?.primary || {}

  return (
    <div>
      GalleryOverview5x1Section
    </div>
  )
}

GalleryOverview5x1Section.displayName = "GalleryOverview5x1Section"
