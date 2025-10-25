import {FC, ReactNode} from "react"
import { Content } from "@prismicio/client"
import {PrismicRichText, SliceComponentProps} from "@prismicio/react"
import {Button} from "../../../libs/ui/Button/Button";
import {prismicToNextColor} from "../../../libs/utils/btnColor";

/**
 * Props for `CenteredStatement`.
 */
export type CenteredStatementProps =
  SliceComponentProps<Content.CenteredStatementSlice> | any

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
      <div className='px-24 pt-64 pb-64 lg:pt-120 lg:pb-160 md:ps-160'>
        <PrismicRichText field={slice.primary.statement} components={components} />

        {slice.variation === 'centeredCta' && (
          <div className='w-fit mx-auto mt-24'>
            <Button label={slice.primary.button_link.text} href={slice.primary.button_link.url} variant={prismicToNextColor(slice.primary.button_color)} />
          </div>
        )}
      </div>
    </section>
  )
}

export default CenteredStatement
