import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturedCard`.
 */
export type FeaturedCardProps = SliceComponentProps<Content.FeaturedCardSlice>;

/**
 * Component for "FeaturedCard" Slices.
 */
const FeaturedCard: FC<FeaturedCardProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for featured_card (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeaturedCard;
