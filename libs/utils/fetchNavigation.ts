import {GetStaticPropsContext} from "next";
import {createClient} from "@/prismicio";
import {isFilled} from "@prismicio/client";

import {LanguagesDocument} from "../../prismicio-types";

export async function fetchNavigation(previewData: GetStaticPropsContext['previewData']) {
  const client = createClient({ previewData });
  const { data } = await client.getSingle("navigation");

  if (!isFilled.link(data.languages)) return data;

  const { data: langData } = await client.getByID(data.languages.id) as LanguagesDocument;

  return {...data, languages: langData.lang};
}