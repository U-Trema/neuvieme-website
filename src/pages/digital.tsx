import {GetStaticPropsContext} from "next";
import {createClient} from "@/prismicio";
import {SliceZone} from "@prismicio/react";
import {components} from "@/slices";
import {isFilled} from "@prismicio/client";

import {fetchNavigation} from "../../libs/utils/fetchNavigation";

export default function Digital({ page }: any) {

  return (
    <div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const nav = await fetchNavigation(previewData);
  const page = await client.getSingle("digital_creation");

  const enrichedSlices = await Promise.all(
    page.data.slices.map(async (slice) => {
      if (slice.slice_type === "side_media_content" && slice.variation === 'contactInfoMediaRight') {

        const socialLinks = isFilled.link(slice.primary.social_links)
          ? await client.getByID(slice.primary.social_links.id)
          : null;

        return {
          ...slice,
          primary: {
            ...slice.primary,
            social_links: socialLinks
          },
        };
      }

      return slice;
    })
  );

  return {
    props: {
      nav,
      page: {
        ...page,
        data: {
          ...page.data,
          slices: enrichedSlices
        }
      }
    }
  };
}
