import { FC } from "react"
import { Content } from "@prismicio/client"
import {PrismicImage, SliceComponentProps} from "@prismicio/react"
import {normalizeForMatch} from "../../../libs/utils/normalizeForMatch";
import {similarity} from "../../../libs/utils/matchClosest";

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

  const scrollTo = (label: string | null) => {
    if (!label) return

    const target = normalizeForMatch(label)
    if (!target) return

    const allWithId = Array.from(document.querySelectorAll<HTMLElement>("[id]"))

    let bestElem: HTMLElement | null = null
    let bestScore = 0

    for (const elem of allWithId) {
      const normId = normalizeForMatch(elem.id)
      const score = similarity(target, normId)

      if (score > bestScore) {
        bestScore = score
        bestElem = elem
      }
    }

    // seuil de sécurité : à ajuster si besoin
    if (!bestElem || bestScore < 0.4) {
      console.warn("Aucun élément suffisamment proche", { label, bestScore })
      return
    }

    const offset = 150
    const elementPosition = bestElem.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - offset

    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='px-24 py-64 lg:pt-120 lg:pb-160 md:ps-160'>
        <ul className='md:ps-12 grid grid-cols-3 grid-rows-2 gap-[48px] list-none p-0 m-0'>
          {items.map((item, index) => {
            console.log({ item })
            return (
              <li key={index} className='cursor-pointer flex column justify-center items-center flex-col' onClick={() => scrollTo(item.label)}>
                <div className='mb-[4px]'><PrismicImage field={item.icon} alt="" width={24} /></div>
                <a href={`#`} className='font-medium text-base text-center'>{item.label}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default IconTextGrid
