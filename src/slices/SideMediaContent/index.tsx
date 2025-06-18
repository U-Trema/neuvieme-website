import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import {RealisationSection} from "../../../libs/ui/Sections/components/RealisationSection/RealisationSection";

/**
 * Props for `SideMediaContent`.
 */
export type SideMediaContentProps =
  SliceComponentProps<Content.SideMediaContentSlice>;

/**
 * Component for "SideMediaContent" Slices.
 */
const SideMediaContent: FC<SideMediaContentProps> = ({ slice }) => {
  console.log({ slice })

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/*<RealisationSection*/}
      {/*  title='Communication'*/}
      {/*  description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem delectus inventore, neque repellat sed tenetur. A eaque est modi saepe? Ab ad debitis delectus dolores earum impedit.'*/}
      {/*  btn='Voir nos réalisations'*/}
      {/*  link='#'*/}
      {/*  image='https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'*/}
      {/*/>*/}
      <RealisationSection slice={slice} />
    </section>
  );
};

export default SideMediaContent;
