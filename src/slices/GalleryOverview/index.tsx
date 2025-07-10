import { FC } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import {GalleryOverviewSection} from "../../../libs/ui/Sections/components/GalleryOverviewSection/GalleryOverview";

/**
 * Props for `GalleryOverview`.
 */
export type GalleryOverviewProps =
  SliceComponentProps<Content.GalleryOverviewSlice>

/**
 * Component for "GalleryOverview" Slices.
 */
const GalleryOverview: FC<GalleryOverviewProps> = ({ slice }) => {
  return <div>cool</div>
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GalleryOverviewSection slice={slice} />
    </section>
  )
}

export default GalleryOverview

// n: "default" | "5X1" | "1X1" | "2X1" | "2X2"