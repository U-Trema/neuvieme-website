import { FC } from "react"
import { Content } from "@prismicio/client"
import {PrismicImage, SliceComponentProps} from "@prismicio/react"
import Link from "next/link";

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

  const scrollTo = (id: string | null) => {
    if (!document) return
    if (!id) return

    const elem = document.querySelector(`#${id.replace(' ', '_')}`);
    if (!elem) return

    const offset = 150;
    const elementPosition = elem.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='px-24 py-64 lg:pt-120 lg:pb-160 md:ps-160'>
        <ul className='md:ps-12 grid grid-cols-3 grid-rows-2 gap-[48px] list-none p-0 m-0'>
          {items.map((item, index) => {
            return (
              <li key={index} className='cursor-pointer flex column justify-center items-center flex-col' onClick={() => scrollTo(item.label)}>
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
