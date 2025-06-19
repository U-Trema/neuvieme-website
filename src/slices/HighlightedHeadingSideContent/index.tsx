import { FC } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

import {
  HighlightedHeadingSection
} from "../../../libs/ui/Sections/components/HighlightedHeadingSection/HighlightedHeadingSection"

/**
 * Props for `HighlightedHeadingSideContent`.
 */
export type HighlightedHeadingSideContentProps =
  SliceComponentProps<Content.HighlightedHeadingSideContentSlice>

/**
 * Component for "HighlightedHeadingSideContent" Slices.
 */
const HighlightedHeadingSideContent: FC<HighlightedHeadingSideContentProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HighlightedHeadingSection slice={slice}/>
    </section>
  )
}

export default HighlightedHeadingSideContent
