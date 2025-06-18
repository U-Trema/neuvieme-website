import {GetStaticPropsContext} from "next"
import {createClient} from "@/prismicio"
import {SliceZone} from "@prismicio/react"
import {components} from "@/slices"
import {isFilled} from "@prismicio/client"
import {useEffect, useRef} from "react"

import {Scroll} from "../../libs/ui/Scroll/Scroll"
import {RealisationSection} from "../../libs/ui/Sections/components/RealisationSection/RealisationSection"
import {Footer} from "../../libs/ui/Footer/Footer"
import {fetchNavigation} from "../../libs/utils/fetchNavigation"


export default function Home({ page, nav }: any) {
  console.log({ page, nav })
  const ref = useRef<any>(null)
  const pref = useRef<any>(null)
  const [heroSlice, ...slices] = page.data.slices

  useEffect(() => {
    const cursorFollower = ref.current
    if (!ref.current) return
    if (!pref.current) return

    function updateCursorPosition(e: any) {
      const x = e.clientX
      const y = e.clientY

      cursorFollower.style.left = x + 'px'
      cursorFollower.style.top = y + 'px'
    }

    pref.current.addEventListener('mousemove', updateCursorPosition)

    pref.current.addEventListener('mouseleave', function() {
      cursorFollower.style.opacity = '0'
    })

    pref.current.addEventListener('mouseenter', function() {
      cursorFollower.style.opacity = '1'
    })

    return () => {
      if (pref.current) {
        return pref.current.removeEventListener('mousemove', updateCursorPosition)
      }
    }
  }, [ref.current])

  return (
    <>
      <SliceZone slices={[heroSlice]} components={components} />

      <div ref={pref} style={{ position: 'relative' }}>
        <Scroll />
        <SliceZone slices={slices} components={components} />
        <div className='cursor-follower' ref={ref} />
      </div>
    </>
  )
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData })
  const nav = await fetchNavigation(previewData)
  const page = await client.getSingle("home")

  const enrichedSlices = await Promise.all(
    page.data.slices.map(async (slice) => {
      if (slice.slice_type === "contact_info_social_language") {
        const contactInfo = isFilled.link(slice.primary.contact_info)
          ? await client.getByID(slice.primary.contact_info.id)
          : null

        const languages = isFilled.link(slice.primary.languages)
          ? await client.getByID(slice.primary.languages.id)
          : null

        const socialLinks = isFilled.link(slice.primary.social_links)
          ? await client.getByID(slice.primary.social_links.id)
          : null

        return {
          ...slice,
          primary: {
            ...slice.primary,
            contact_info: contactInfo,
            languages: languages,
            social_links: socialLinks,
          },
        }
      }

      return slice
    })
  )

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
  }
}