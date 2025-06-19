import { FC } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

import { BaseSection } from "../../../libs/ui/Sections/components/BaseSection/BaseSection"

/**
 * Props for `IntroTextCta`.
 */
export type IntroTextCtaProps = SliceComponentProps<Content.IntroTextCtaSlice>

/**
 * Component for "IntroTextCta" Slices.
 */
const IntroTextCta: FC<IntroTextCtaProps> = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BaseSection slice={slice} />
    </section>
  )
}

export default IntroTextCta
