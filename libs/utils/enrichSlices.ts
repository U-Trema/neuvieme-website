import {isFilled} from "@prismicio/client"
import {createClient} from "@/prismicio"

type Slice = Record<string, any>

const singleLinks = ['contact_info', 'social_links', 'languages']
const projectLinks = ['highlighted_heading_side_content', 'featured_card']
const arraysWithProjects = ['cards', 'medias', 'items']

export async function enrichSlices(
  slices: Slice[],
  previewData?: any
): Promise<Slice[]> {
  if (!Array.isArray(slices)) return []

  const client = createClient({previewData})

  return await Promise.all(
    slices.map(async (slice) => {
      if (!slice || !slice.primary || !slice.slice_type) return slice

      const newSlice = {...slice}

      // Pour les custom_types "Single"
      await Promise.all(
        singleLinks.map(async (field: string) => {
          const linkField = slice.primary[field]
          if (!linkField || !isFilled.link(linkField)) return

          try {
            newSlice.primary[field] = await client.getByID((<any>linkField).id)
          } catch (error) {
            console.error(`Error fetching document for field ${field} in slice ${slice.slice_type}:`, error)
          }
        })
      )

      // Pour les slices avec appel d'un seul projet
      if (projectLinks.includes(slice.slice_type) && slice.primary.project && isFilled.link(slice.primary.project)) {
        try {
          newSlice.primary.project = await client.getByID(slice.primary.project.id)
        } catch (error) {
          console.error(`Error fetching project for slice ${slice.slice_type}:`, error)
        }
      }

      // Pour les slices avec appel d'une liste de projet
      await Promise.all(
        arraysWithProjects.map(async (field) => {
          const value = slice.primary[field]
          if (!Array.isArray(value)) return

          newSlice.primary[field] = await enrichProjectList(value, client, slice.slice_type, field)
        })
      )

      return newSlice
    })
  )
}

async function enrichProjectList(
  list: any[],
  client: ReturnType<typeof createClient>,
  sliceType: string,
  logContext: string
): Promise<any[]> {
  return Promise.all(
    list.map(async (item, index) => {
      if (!item?.project || !isFilled.link(item.project)) return item

      try {
        const doc = await client.getByID(item.project.id)
        return { ...item, project: doc }
      } catch (error) {
        console.error(`Error fetching project (${logContext}) at index ${index} in slice ${sliceType}:`, error)
        return item
      }
    })
  )
}

/* **** on effacera quand toutes les query seront terminées *****
- advertising_productions ✓
highlighted_heading_side_content ✓
featured_card ✓
gallery_overview ✓

- digital_creation
testimonial_carousel
gallery_overview ✓
side_media_content ✓

----------------------------
- audio_realization
interactive_card_sphere

- about
side_media_content ✓

- home
contact_info_social_language ✓
side_media_content ✓
*/