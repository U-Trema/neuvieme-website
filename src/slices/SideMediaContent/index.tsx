import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SideMediaContent`.
 */
export type SideMediaContentProps =
  SliceComponentProps<Content.SideMediaContentSlice>;

/**
 * Component for "SideMediaContent" Slices.
 */
const SideMediaContent: FC<SideMediaContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for side_media_content (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default SideMediaContent;
