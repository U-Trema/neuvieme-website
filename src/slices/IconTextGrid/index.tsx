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
      <div className='px-24 py-64 lg:pt-120 lg:pb-160 md:ps-160'>
        <ul className='md:ps-12 grid grid-cols-3 grid-rows-2 gap-[48px] list-none p-0 m-0'>
          {items.map((item, index) => {
            return (
              <li key={index} className='flex column justify-center items-center flex-col'>
                <div className='mb-[4px]'><PrismicImage field={item.icon} alt="" width={24} /></div>
                <p className='font-medium text-base text-center'>{item.label}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default IconTextGrid
