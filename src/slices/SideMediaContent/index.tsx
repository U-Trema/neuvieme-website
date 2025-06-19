import { FC } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

import {RealisationSection} from "../../../libs/ui/Sections/components/RealisationSection/RealisationSection"

/**
 * Props for `SideMediaContent`.
 */
export type SideMediaContentProps =
  SliceComponentProps<Content.SideMediaContentSlice>

/**
 * Component for "SideMediaContent" Slices.
 */
const SideMediaContent: FC<SideMediaContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <RealisationSection slice={slice} />
    </section>
  )
}

export default SideMediaContent
