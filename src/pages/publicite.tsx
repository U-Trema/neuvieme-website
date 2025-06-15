import {GetStaticPropsContext} from "next";
import {createClient} from "@/prismicio";
import {SliceZone} from "@prismicio/react";
import {components} from "@/slices";

import {fetchNavigation} from "../../libs/utils/fetchNavigation";

export default function Advertising({ nav, page }: any) {
  console.log({ nav, page })

  return (
    <div>
      Advertising
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const nav = await fetchNavigation(previewData);
  const page = await client.getSingle("advertising_production");

  return {
    props: {
      nav,
      page,
    }
  };
}
