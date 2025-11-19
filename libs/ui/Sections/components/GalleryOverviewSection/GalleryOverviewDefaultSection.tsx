import React, {FC} from "react"
import {PrismicImage} from "@prismicio/react"

type Props = any

export const GalleryOverviewDefaultSection: FC<Props> = ({ slice }) => {
  if (!slice.primary.items.length) return null

  return (
    <div className='md:px-24 pt-40 md:pt-120 md:pb-160 md:ps-160'>
      <ul className='flex flex-col md:flex-row gap-24 md:gap-9'>
        {slice.primary.items.map((item: any, index: number) => {
          return (
            <li key={index} className='basis-1/4'>
              <figure className='h-full'>
                <PrismicImage field={item.image} className='aspect-square md:aspect-auto block object-cover w-full h-full' />
                <figcaption className='text-center font-bold pt-9 md:pt-16 text-sm'>{item.caption}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

GalleryOverviewDefaultSection.displayName = "GalleryOverviewDefaultSection"
