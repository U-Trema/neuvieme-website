import React, {FC, ReactNode} from "react"
import {PrismicImage, PrismicRichText} from "@prismicio/react"

import {galleryOverviewSectionClasses} from "./gallery-overview.section.classes"


type Props = any

// const components = {
//   heading2: ({ children }: { children: ReactNode }) => (<h2 className={galleryOverviewSectionClasses.title()}>{children}</h2>),
//   paragraph: ({ children }: { children: ReactNode }) => (<p className='text-sm'>{children}</p>),
// }

export const GalleryOverviewDefaultSection: FC<Props> = ({ slice }) => {
  if (!slice.primary.items.length) return null

  console.log('slice: ', slice)
  // const { root, wrapper, title, gallery } = galleryOverviewSectionClasses;

  // console.log({ p: slice?.primary })
  // const { project, button_link } = slice?.primary || {}

  return (
    <div>
      GalleryOverviewDefaultSection
    </div>
  )
}

GalleryOverviewDefaultSection.displayName = "GalleryOverviewDefaultSection"
