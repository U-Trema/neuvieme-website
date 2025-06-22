import {isFilled} from "@prismicio/client"
import {createClient} from "@/prismicio"

type Slice = Record<string, any>

const singleLinks = ['contact_info', 'social_links', 'languages']
const projectLinks = ['highlighted_heading_side_content', 'featured_card']

export async function enrichSlices(
  slices: Slice[],
  previewData?: any
): Promise<Slice[]> {
  const client = createClient({ previewData })

  return await Promise.all(
    slices.map(async (slice) => {
      const newSlice = { ...slice }

      await Promise.all(
        singleLinks.map(async (field) => {
          if (!isFilled.link(slice.primary?.[field])) return;
          newSlice.primary[field] = await client.getByID((<any>slice.primary[field]).id)
        })
      )

      if (projectLinks.includes(slice.slice_type) && isFilled.link(slice.primary?.project)) {
        newSlice.primary.project = await client.getByID(slice.primary.project.id)
      }

      if (Array.isArray(slice.primary?.cards)) {
        newSlice.primary.cards = await Promise.all(
          slice.primary.cards.map(async (card: any) => {
            if (!isFilled.link(card?.project)) return card

            const doc = await client.getByID(card.project.id)
            return {...card, project: doc}
          })
        )
      }
      if (Array.isArray(slice.primary?.medias)) {
        newSlice.primary.medias = await Promise.all(
          slice.primary.medias.map(async (media: any) => {
            if (!isFilled.link(media?.project)) return media

            const doc = await client.getByID(media.project.id)
            return {...media, project: doc}
          })
        )
      }

      return newSlice
    })
  )
}


/*
- advertising_productions
highlighted_heading_side_content
featured_card
gallery_overview

- digital_creation
testimonial_carousel
gallery_overview
side_media_content

----------------------------
- audio_realization
interactive_card_sphere

- about
side_media_content

- home
contact_info_social_language
side_media_content

*/