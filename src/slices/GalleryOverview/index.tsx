import { FC } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `GalleryOverview`.
 */
export type GalleryOverviewProps =
  SliceComponentProps<Content.GalleryOverviewSlice>

/**
 * Component for "GalleryOverview" Slices.
 */
const GalleryOverview: FC<GalleryOverviewProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for gallery_overview (variation: {slice.variation})
      Slices
    </section>
  )
}

export default GalleryOverview
