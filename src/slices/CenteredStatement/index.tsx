import { FC } from "react"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `CenteredStatement`.
 */
export type CenteredStatementProps =
  SliceComponentProps<Content.CenteredStatementSlice>

/**
 * Component for "CenteredStatement" Slices.
 */
const CenteredStatement: FC<CenteredStatementProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for centered_statement (variation: {slice.variation}
      ) Slices
    </section>
  )
}

export default CenteredStatement
