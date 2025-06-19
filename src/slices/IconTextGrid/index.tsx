import { FC } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `IconTextGrid`.
 */
export type IconTextGridProps = SliceComponentProps<Content.IconTextGridSlice>

/**
 * Component for "IconTextGrid" Slices.
 */
const IconTextGrid: FC<IconTextGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for icon_text_grid (variation: {slice.variation})
      Slices
    </section>
  )
}

export default IconTextGrid
