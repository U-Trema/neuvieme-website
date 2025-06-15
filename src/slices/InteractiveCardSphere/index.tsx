import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `InteractiveCardSphere`.
 */
export type InteractiveCardSphereProps =
  SliceComponentProps<Content.InteractiveCardSphereSlice>;

/**
 * Component for "InteractiveCardSphere" Slices.
 */
const InteractiveCardSphere: FC<InteractiveCardSphereProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for interactive_card_sphere (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default InteractiveCardSphere;
