import { FC } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

import {
  HeadlineWithSubtextSection
} from "../../../libs/ui/Sections/components/HeadlineWithSubtextSection/HeadlineSection"

/**
 * Props for `HeadlineWithSubtext`.
 */
export type HeadlineWithSubtextProps =
  SliceComponentProps<Content.HeadlineWithSubtextSlice>

/**
 * Component for "HeadlineWithSubtext" Slices.
 */
const HeadlineWithSubtext: FC<HeadlineWithSubtextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeadlineWithSubtextSection slice={slice} />
    </section>
  )
}

export default HeadlineWithSubtext
