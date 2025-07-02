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
      {/* TODO slice => faut faire ça tavu */}
      <p style={{ margin: '20px 0 0 0', backgroundColor: 'red', paddingBottom: 20 }}>
        MANQUE LA SLICE ICI : slices/GalleryOverview/index.tsx
      </p>
      <p style={{ margin: '0 0 20px', backgroundColor: 'red' }}>
        Placeholder component for gallery_overview (variation: {slice.variation})
        Slices
      </p>
    </section>
  )
}

export default GalleryOverview
