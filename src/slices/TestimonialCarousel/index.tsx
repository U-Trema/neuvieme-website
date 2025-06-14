import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestimonialCarousel`.
 */
export type TestimonialCarouselProps =
  SliceComponentProps<Content.TestimonialCarouselSlice>;

/**
 * Component for "TestimonialCarousel" Slices.
 */
const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testimonial_carousel (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default TestimonialCarousel;
