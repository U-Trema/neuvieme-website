import {GetStaticPropsContext} from "next";
import {createClient} from "@/prismicio";
import {SliceZone} from "@prismicio/react";
import {components} from "@/slices";
import {isFilled} from "@prismicio/client";

import {Scroll} from "../../libs/ui/Scroll/Scroll";
import {Hero} from "../../libs/ui/Hero/Hero";
import {BaseSection} from "../../libs/ui/Sections/components/BaseSection/BaseSection";
import {RealisationSection} from "../../libs/ui/Sections/components/RealisationSection/RealisationSection";
import {fetchNavigation} from "../../libs/utils/fetchNavigation";

export default function Home({ page, nav }: any) {
  console.log({ page, nav })

  return (
    <>
      <Hero />

      <div style={{ position: 'relative' }}>
        <Scroll />

        <BaseSection />

        <RealisationSection
          title='Communication'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem delectus inventore, neque repellat sed tenetur. A eaque est modi saepe? Ab ad debitis delectus dolores earum impedit.'
          btn='Voir nos réalisations'
          link='#'
          image='https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />

        <RealisationSection
          title='Publicité'
          description='Professionnels de l’image, notre équipe réalise vos shootings et vidéos pour tous types de besoins.'
          btn='Voir nos réalisations'
          link='#'
          image='https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />

        <RealisationSection
          title='Production audiovisuelle'
          description='Notre objectif est de vous rendre unique. En créant une identité visuelle impactante et cohérente, votre marque fera la différence.'
          btn='Voir nos réalisations'
          link='#'
          image='https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const nav = await fetchNavigation(previewData);
  const page = await client.getSingle("home");

  const enrichedSlices = await Promise.all(
    page.data.slices.map(async (slice) => {
      if (slice.slice_type === "contact_info_social_language") {
        const contactInfo = isFilled.link(slice.primary.contact_info)
          ? await client.getByID(slice.primary.contact_info.id)
          : null;

        const languages = isFilled.link(slice.primary.languages)
          ? await client.getByID(slice.primary.languages.id)
          : null;

        const socialLinks = isFilled.link(slice.primary.social_links)
          ? await client.getByID(slice.primary.social_links.id)
          : null;

        return {
          ...slice,
          primary: {
            ...slice.primary,
            contact_info: contactInfo,
            languages: languages,
            social_links: socialLinks,
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