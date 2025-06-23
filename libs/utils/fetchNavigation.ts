import {GetStaticPropsContext} from "next";
import {createClient} from "@/prismicio";
import {isFilled} from "@prismicio/client";

import {LanguagesDocument} from "../../prismicio-types";
import {nextToPrismicLocale} from "./locales";

export async function fetchNavigation({locale, previewData}: GetStaticPropsContext) {
  const client = createClient({previewData});
  const {data} = await client.getSingle('navigation', {lang: nextToPrismicLocale(locale!)});

  if (!isFilled.link(data.languages)) return data;

  const {data: langData} = await client.getByID(data.languages.id) as LanguagesDocument;

  return {...data, languages: langData.lang};
}
