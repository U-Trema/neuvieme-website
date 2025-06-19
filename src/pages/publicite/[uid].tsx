import {GetStaticPropsContext} from "next"
import {createClient} from "@/prismicio"
import {SliceZone} from "@prismicio/react"
import {components} from "@/slices"
import {isFilled} from "@prismicio/client"

import {fetchNavigation} from "../../../libs/utils/fetchNavigation"
import {useEffect, useRef} from "react"
import {Scroll} from "../../../libs/ui/Scroll/Scroll"


type Params = { uid: string }

export default function Advertising({ page }: any) {
  const ref = useRef<any>(null)
  const pref = useRef<any>(null)

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
      if (pref.current) return pref.current.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [ref.current])

  return (
    <div ref={pref} style={{ position: 'relative' }}>
      <Scroll />
      <SliceZone slices={page.data.slices} components={components} />
      <div className='cursor-follower' ref={ref} />
    </div>
  )
}

export async function getStaticProps({ params, previewData }: GetStaticPropsContext<Params>) {
  const client = createClient({ previewData })
  const nav = await fetchNavigation(previewData)
  const page = await client.getByUID('advertising_productions', params!.uid)
  const enrichedSlices = await Promise.all(
    page.data.slices.map(async (slice) => {
      if (slice.slice_type === "highlighted_heading_side_content" || slice.slice_type === "featured_card") {
        const project = isFilled.link(slice.primary.project)
          ? await client.getByID(slice.primary.project.id)
          : null

        return {
          ...slice,
          primary: {
            ...slice.primary,
            project
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

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('advertising_productions')
  const paths = pages.map((page) => ({params: { uid: page.uid }}))

  return {paths, fallback: false}
}
