import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {Footer} from "../../../libs/ui/Footer/Footer";

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
      <Footer slice={slice} />
    </section>
  );
};

export default ContactInfoSocialLanguage;
