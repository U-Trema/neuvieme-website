import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AsymmetricalGrid`.
 */
export type AsymmetricalGridProps =
  SliceComponentProps<Content.AsymmetricalGridSlice>;

/**
 * Component for "AsymmetricalGrid" Slices.
 */
const AsymmetricalGrid: FC<AsymmetricalGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for asymmetrical_grid (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AsymmetricalGrid;
