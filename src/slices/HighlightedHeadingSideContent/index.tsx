import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HighlightedHeadingSideContent`.
 */
export type HighlightedHeadingSideContentProps =
  SliceComponentProps<Content.HighlightedHeadingSideContentSlice>;

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
      Placeholder component for highlighted_heading_side_content (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default HighlightedHeadingSideContent;
