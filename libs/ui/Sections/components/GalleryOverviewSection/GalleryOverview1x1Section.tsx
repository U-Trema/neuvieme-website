import React, {FC} from 'react'
import {PrismicImage} from "@prismicio/react";

type Props = any

export const GalleryOverview1x1Section: FC<Props> = ({slice}) => {
  const has_items = slice.primary.items.length
  const has_icons = slice.primary.services_icons.length

  if (!has_items && !has_icons) return null

  return (
    <div className='pt-40 pb-40 md:pt-120 md:pb-160'>
      <div className='mx-auto'>
        {slice.primary.items?.map((item: any, i: number) => {
          if (i > 0) return

          return (
            <div className='overflow-hidden' key={i}>
              <PrismicImage
                field={item.image}
                className='block w-full md:w-[50vw] h-full max-h-[70vh] object-cover mx-auto'
              />
            </div>
          )
        })}
      </div>

      {has_icons && (
        <ul className='flex flex-wrap md:flex-nowrap mt-40 md:mt-24 w-[100vw] md:w-[65vw] mx-auto justify-between gap-24'>
          {slice.primary.services_icons.map((item: any, i: number) => {
            return (
              <li key={i} className='basis-[calc(50%-12px)] md:basis-1/4'>
                <div className='w-[90%] h-full mx-auto flex flex-col items-center'>
                  <PrismicImage field={item.icon} className='block mx-auto w-32'/>
                  <p className='text-sm md:text-base text-center mt-4 md:mt-auto leading-[150%] self-center'>{item?.service}</p>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

GalleryOverview1x1Section.displayName = 'GalleryOverview1x1Section'
