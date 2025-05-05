import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `StatisticsSection`.
 */
export type StatisticsSectionProps =
  SliceComponentProps<Content.StatisticsSectionSlice>;

/**
 * Component for "StatisticsSection" Slices.
 */
const StatisticsSection: FC<StatisticsSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for statistics_section (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default StatisticsSection;
