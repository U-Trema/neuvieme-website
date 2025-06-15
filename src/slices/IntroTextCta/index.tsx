import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `IntroTextCta`.
 */
export type IntroTextCtaProps = SliceComponentProps<Content.IntroTextCtaSlice>;

/**
 * Component for "IntroTextCta" Slices.
 */
const IntroTextCta: FC<IntroTextCtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for intro_text_cta (variation: {slice.variation})
      Slices
    </section>
  );
};

export default IntroTextCta;
