import React, {FC, ReactNode} from "react"
import {PrismicImage, PrismicRichText} from "@prismicio/react"

import {galleryOverviewSectionClasses} from "./gallery-overview.section.classes"
import {GalleryOverviewDefaultSection} from "./GalleryOverviewDefaultSection";
import {GalleryOverview5x1Section} from "./GalleryOverview5x1Section";
import {GalleryOverview1x1Section} from "./GalleryOverview1x1Section";
import {GalleryOverview2x1Section} from "./GalleryOverview2x1Section";
import {GalleryOverview2x2Section} from "./GalleryOverview2x2Section";


type Props = any

const variationComponents: Record<string, FC<Props>> = {
  default: GalleryOverviewDefaultSection,
  "5X1": GalleryOverview5x1Section,
  "1X1": GalleryOverview1x1Section,
  "2X1": GalleryOverview2x1Section,
  "2X2": GalleryOverview2x2Section,
};

const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={galleryOverviewSectionClasses.title()}>{children}</h2>),
  paragraph: ({ children }: { children: ReactNode }) => (<p className='text-sm'>{children}</p>),
}

export const GalleryOverviewSection: FC<Props> = ({ slice }) => {
  const { root, wrapper, title, gallery } = galleryOverviewSectionClasses;
  const VariationComponent = variationComponents[slice.variation] || GalleryOverviewDefaultSection;

  console.log({ p: slice?.primary })
  // const { project, button_link } = slice?.primary || {}

  return (
    <div className={root()}>
      <div className={wrapper()}>
        {slice.primary.title && (
          <h2 className={title()}>{slice.primary.title}</h2>
        )}
        <div className={gallery({ variation: slice.variation })}>
          <VariationComponent slice={slice} />
        </div>
      </div>
    </div>
  )
}

GalleryOverviewSection.displayName = "GalleryOverviewSection"
