import {FC, ReactNode} from "react"
import { Content } from "@prismicio/client"
import {PrismicRichText, SliceComponentProps} from "@prismicio/react"

/**
 * Props for `CenteredStatement`.
 */
export type CenteredStatementProps =
  SliceComponentProps<Content.CenteredStatementSlice>

const components = {
  paragraph: ({ children }: { children: ReactNode }) => (<p className='font-black text-2xl text-center'>{children}</p>),
}

/**
 * Component for "CenteredStatement" Slices.
 */
const CenteredStatement: FC<CenteredStatementProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='px-24 pt-64 md:pt-120 md:pb-160 md:ps-160'>
        <PrismicRichText field={slice.primary.statement} components={components} />
      </div>
    </section>
  )
}

export default CenteredStatement
