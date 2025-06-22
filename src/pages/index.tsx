import React, {useEffect, useRef} from "react"
import {GetStaticPropsContext} from "next"
import {createClient} from "@/prismicio"
import {SliceZone} from "@prismicio/react"
import {components} from "@/slices"

import {Scroll} from "../../libs/ui/Scroll/Scroll"
import {fetchNavigation} from "../../libs/utils/fetchNavigation"
import {enrichSlices} from "../../libs/utils/enrichSlices";

export default function Home({ page }: any) {
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
  const enrichedSlices = await enrichSlices(page.data.slices, previewData)

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
