import React, {FC} from "react"
import {PrismicImage} from "@prismicio/react"

import {galleryOverview2x2SectionClasses} from "./gallery-overview.section.classes"

type Props = any

export const GalleryOverview2x2Section: FC<Props> = ({ slice }) => {
  const { project } = slice.primary.items?.[0];

  const medias = project?.data?.medias;

  if (!project) return null;
  if (!medias) return null;

  return (
    <>
      {medias.map((media: any, index: number) => {
        const cols = Math.floor(index / 4) % 2 === 0 ? (index % 4 === 1 || index % 4 === 2 ? '7cols' : '5cols') : (index % 4 === 0 || index % 4 === 3 ? '7cols' : '5cols');

        return (
          <div key={index} className={galleryOverview2x2SectionClasses.root({ variation: cols })}>
            <PrismicImage field={media.image} className='object-cover' style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
          </div>
        )
      })}
    </>
  )
}

GalleryOverview2x2Section.displayName = "GalleryOverview2x2Section"
