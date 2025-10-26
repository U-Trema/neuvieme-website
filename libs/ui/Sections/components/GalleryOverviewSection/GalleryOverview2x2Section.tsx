import React, {FC, useState} from "react"
import {PrismicImage} from "@prismicio/react"

import {galleryOverview2x2SectionClasses} from "./gallery-overview.section.classes"

type Props = any

export const GalleryOverview2x2Section: FC<Props> = ({ slice }) => {
  const [state, setState] = useState({ initialState: 0, showOverlay: false })
  const { project } = slice.primary.items?.[0];

  const medias = project?.data?.medias;

  React.useEffect(() => {
    if (state.showOverlay) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [state.showOverlay])

  if (!project) return null;
  if (!medias) return null;

  const handleClick = (e: any) => {
    e.stopPropagation()
    const index = Number(e.target.getAttribute('data-index'))
    setState({ initialState: index, showOverlay: true })
  }

  return (
    <>
      {medias.map((media: any, index: number) => {
        const cols = Math.floor(index / 4) % 2 === 0 ? (index % 4 === 1 || index % 4 === 2 ? '7cols' : '5cols') : (index % 4 === 0 || index % 4 === 3 ? '7cols' : '5cols');

        return (
          <div key={index} data-index={index} className={galleryOverview2x2SectionClasses.root({ variation: cols })} onClick={handleClick}>
            <PrismicImage data-index={index} field={media.image} className='object-cover' style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
          </div>
        )
      })}

      <div
        className={`fixed top-[140px] left-0 z-[999] h-[100vh] w-full transition-opacity duration-300 ${state.showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setState({...state, showOverlay: false})}
      >
        <PrismicImage
          field={medias[state.initialState].image}
          width='100%'
          height='100%'
          className={`object-cover h-full transition-opacity duration-500 ${state.showOverlay ? 'opacity-100 delay-150' : 'opacity-0'}`}
        />
      </div>
    </>
  )
}

GalleryOverview2x2Section.displayName = "GalleryOverview2x2Section"
