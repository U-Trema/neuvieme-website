import {isFilled} from "@prismicio/client"
import {createClient} from "@/prismicio"

type Slice = Record<string, any>

const singleLinks = ['contact_info', 'social_links', 'languages']
const projectLinks = ['highlighted_heading_side_content', 'featured_card']

export async function enrichSlices(
  slices: Slice[],
  previewData?: any
): Promise<Slice[]> {
  const client = createClient({previewData})

  if (!Array.isArray(slices)) return []

  return await Promise.all(
    slices.map(async (slice) => {
      if (!slice || !slice.primary || !slice.slice_type) return slice

      const newSlice = {...slice}

      await Promise.all(
        singleLinks.map(async (field) => {
          const linkField = slice.primary[field]
          if (!linkField || !isFilled.link(linkField)) return

          try {
            newSlice.primary[field] = await client.getByID((<any>slice.primary[field]).id)
          } catch (error) {
            console.error(`Error fetching document for field ${field} in slice ${slice.slice_type}:`, error)
          }
        })
      )

      if (projectLinks.includes(slice.slice_type) && slice.primary.project && isFilled.link(slice.primary.project)) {
        try {
          newSlice.primary.project = await client.getByID(slice.primary.project.id)
        } catch (error) {
          console.error(`Error fetching project for slice ${slice.slice_type}:`, error)
        }
      }

      if (Array.isArray(slice.primary.cards)) {
        newSlice.primary.cards = await Promise.all(
          slice.primary.cards.map(async (card: any) => {
            if (!card?.project || !isFilled.link(card.project)) return card

            try {
              const doc = await client.getByID(card.project.id)
              return {...card, project: doc}
            } catch (error) {
              console.error(`Error fetching card project in slice ${slice.slice_type}:`, error)
              return card
            }
          })
        )
      }

      if (Array.isArray(slice.primary.medias)) {
        newSlice.primary.medias = await Promise.all(
          slice.primary.medias.map(async (media: any) => {
            if (!media?.project || !isFilled.link(media.project)) return media

            try {
              const doc = await client.getByID(media.project.id)
              return {...media, project: doc}
            } catch (error) {
              console.error(`Error fetching media project in slice ${slice.slice_type}:`, error)
              return media
            }
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