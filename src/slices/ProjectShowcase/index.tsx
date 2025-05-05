import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectShowcase`.
 */
export type ProjectShowcaseProps =
  SliceComponentProps<Content.ProjectShowcaseSlice>;

/**
 * Component for "ProjectShowcase" Slices.
 */
const ProjectShowcase: FC<ProjectShowcaseProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_showcase (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectShowcase;
