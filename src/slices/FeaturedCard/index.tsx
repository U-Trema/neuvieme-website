import { FC } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

import {FeaturedCardSection} from "../../../libs/ui/Sections/components/FeaturedCardSection/FeaturedCardSection"

/**
 * Props for `FeaturedCard`.
 */
export type FeaturedCardProps = SliceComponentProps<Content.FeaturedCardSlice>

/**
 * Component for "FeaturedCard" Slices.
 */
const FeaturedCard: FC<FeaturedCardProps> = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FeaturedCardSection slice={slice} context={context} />
    </section>
  )
}

export default FeaturedCard
