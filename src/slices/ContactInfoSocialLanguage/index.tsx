import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactInfoSocialLanguage`.
 */
export type ContactInfoSocialLanguageProps =
  SliceComponentProps<Content.ContactInfoSocialLanguageSlice>;

/**
 * Component for "ContactInfoSocialLanguage" Slices.
 */
const ContactInfoSocialLanguage: FC<ContactInfoSocialLanguageProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_info_social_language (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ContactInfoSocialLanguage;
