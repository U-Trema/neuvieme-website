import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GridGallery`.
 */
export type GridGalleryProps = SliceComponentProps<Content.GridGallerySlice>;

/**
 * Component for "GridGallery" Slices.
 */
const GridGallery: FC<GridGalleryProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for grid_gallery (variation: {slice.variation})
      Slices
    </section>
  );
};

export default GridGallery;
