import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SocialMediaIcons`.
 */
export type SocialMediaIconsProps =
  SliceComponentProps<Content.SocialMediaIconsSlice>;

/**
 * Component for "SocialMediaIcons" Slices.
 */
const SocialMediaIcons: FC<SocialMediaIconsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for social_media_icons (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default SocialMediaIcons;
