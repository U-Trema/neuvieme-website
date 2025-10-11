import { FC } from "react"
import { Content } from "@prismicio/client"
import {PrismicImage, SliceComponentProps} from "@prismicio/react"

/**
 * Props for `IconTextGrid`.
 */
export type IconTextGridProps = SliceComponentProps<Content.IconTextGridSlice>

/**
 * Component for "IconTextGrid" Slices.
 */
const IconTextGrid: FC<IconTextGridProps> = ({ slice }) => {
  const items = slice.primary.items

  if (!items.length) return null

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='px-24 pt-64 md:pt-120 md:pb-160 md:ps-160'>
        <ul className='md:ps-12 flex flex-wrap justify-between gap-[48px]'>
          {items.map((item, index) => {
            return (
              <li key={index} className='w-[30%] flex column justify-center items-center flex-col'>
                <div className='mb-[4px]'><PrismicImage field={item.icon} alt=""/></div>
                <p className='font-medium text-base'>{item.label}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default IconTextGrid
