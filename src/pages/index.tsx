import React, {useEffect, useRef} from "react"
import {GetStaticPropsContext} from "next"
import {createClient} from "@/prismicio"
import {SliceZone} from "@prismicio/react"
import {components} from "@/slices"

import {Scroll} from "../../libs/ui/Scroll/Scroll"
import {fetchNavigation} from "../../libs/utils/fetchNavigation"
import {enrichSlices} from "../../libs/utils/enrichSlices"
import {nextToPrismicLocale} from "../../libs/utils/locales"
import {useMediaQuery} from "@mantine/hooks";

export default function Home({ page }: any) {
  const ref = useRef<any>(null)
  const pref = useRef<any>(null)
  const [heroSlice, ...slices] = page.data.slices

  const matches = useMediaQuery('(max-width: 768px)', false, {
    getInitialValueInEffect: true,
  });

  useEffect(() => {
    if (matches) return

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
  }, [ref.current, matches])

  return (
    <>
      <SliceZone slices={[heroSlice]} components={components} />

      <div ref={pref} style={{ position: 'relative' }}>
        <Scroll />
        <SliceZone slices={slices} components={components} />
        {!matches && <div className='cursor-follower' ref={ref} />}
      </div>
    </>
  )
}

export async function getStaticProps({locale, previewData}: GetStaticPropsContext) {
  try {
    const client = createClient({previewData})
    const prismicLocale = nextToPrismicLocale(locale!)
    const nav = await fetchNavigation({locale: prismicLocale, previewData})
    const page = await client.getSingle('home', {lang: prismicLocale})
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
  } catch (error) {
    console.error('Error fetching document:', error)
    return {
      props: {
        nav :{},
        page: {
          data: {
            slices: []
          }
        }
      }
    }
  }
}
