import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadlineWithSubtext`.
 */
export type HeadlineWithSubtextProps =
  SliceComponentProps<Content.HeadlineWithSubtextSlice>;

/**
 * Component for "HeadlineWithSubtext" Slices.
 */
const HeadlineWithSubtext: FC<HeadlineWithSubtextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for headline_with_subtext (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default HeadlineWithSubtext;
