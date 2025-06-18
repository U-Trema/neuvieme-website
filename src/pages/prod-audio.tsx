import {GetStaticPropsContext} from "next";
import {createClient} from "@/prismicio";
import {SliceZone} from "@prismicio/react";
import {components} from "@/slices";

import {fetchNavigation} from "../../libs/utils/fetchNavigation";

export default function Audio({ page }: any) {

  return (
    <div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const nav = await fetchNavigation(previewData);
  const page = await client.getSingle("audio_realization");

  return {
    props: {
      nav,
      page,
    }
  };
}
