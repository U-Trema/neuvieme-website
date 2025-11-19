import React, {FC, useRef, useState} from "react"
import {PrismicImage} from "@prismicio/react"

import {galleryOverview2x2SectionClasses} from "./gallery-overview.section.classes"
import {VideoWithControls} from "../../../VideoWithControls/VideoWithControls";
import {ZoomMedia} from "../../../../../components/ZoomMedia/ZoomMedia";

type Props = any

// https://imagekit.io/blog/react-video-optimization/
// https://videojs.org/guides/options/
// https://www.google.com/search?q=react+js+vid%C3%A9o+progress+bar+performance+optimization&sca_esv=b8281854a4bc4e84&sxsrf=AE3TifO_SqX9Sg8-zKNkCuZQDjN-7gSSdA%3A1761860523893&udm=50&source=hp&fbs=AIIjpHx4nJjfGojPVHhEACUHPiMQYfURUq58J6Fn4NbJBsIlHfjq0kNfSbygTwSRrWtUGJ3LKfHmt6zzef-1vPMSv7D0IxKUT2MTvXi25XuGgXSjS0KYbiEBT4tbIVRZ45worTtb3FjA7uPv9poUo7atg3jkuDyXWyulSFR79p04fYcSQBElwCJTjrcWOfmFWAED04mmaLCEVtKQL8SEl3SJX7TziAa4LoGwF_2BbhjFC-VVCPd2M6M&aep=1&ntc=1&sa=X&ved=2ahUKEwjdmK718cyQAxUSh_0HHUnhLwIQ2J8OegQICBAE&biw=1800&bih=1044&dpr=2&mstk=AUtExfAh_WGbQpSKmwm_KhgANagK9ACCl-pn2hP_FUanipgiVXHMZ1EQBN2dKzhs3Y-LrOZT2IA5JNj1Qu9d-9q_wTKAAnvcFNFbRkPGChdSVNtZvuv4h_RzLofXtEqq3NZPjtR8TfBVj8FYagUXIk68nI0fbZmsTBFNuOcMa-o3p3GsmeluTlmqkVypzglTd_pvJNg8ovi-IlgMjUJNi--Hc0G_VM6owWlcx5kKIfai9xFUTeqpY1RckJ0eXEYbAKzjSIRqwKTt0jdREwJVjQDrT841n8Qub5D65QFWNK8rDnh9hVRRxU75O2ZU2b1CFs8zfIba8Oeynt1akpY&csuir=1&mtid=p9wDaZncJZ6ai-gP98SV4Aw

export const GalleryOverview2x2Section: FC<Props> = ({ slice }) => {
  const [state, setState] = useState({ initialState: 0, showOverlay: false })
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([])
  const { project } = slice.primary.items?.[0];

  const medias = project?.data?.medias

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

  const handleOpen = (e: any, index: number) => setState({ initialState: index, showOverlay: true })

  const handleClose = () => setState({...state, showOverlay: false})

  return (
    <>
      {medias.map((media: any, index: number) => {
        const cols = Math.floor(index / 4) % 2 === 0 ? (index % 4 === 1 || index % 4 === 2 ? '7cols' : '5cols') : (index % 4 === 0 || index % 4 === 3 ? '7cols' : '5cols');

        return (
          <div key={index} className={galleryOverview2x2SectionClasses.root({ variation: cols })}>
            {media.video.text ? (
              <ZoomMedia
                fullscreen={state.showOverlay && state.initialState === index}
                ref={(el) => { mediaRefs.current[index] = el }}
              >
                <VideoWithControls
                  index={index}
                  open={(e: any) => handleOpen(e, index)}
                  close={handleClose}
                  url={media.video.text}
                  fullscreen={state.showOverlay && state.initialState === index}
                />
              </ZoomMedia>
            ) : (
              <ZoomMedia
                fullscreen={state.showOverlay && state.initialState === index}
                ref={(el) => { mediaRefs.current[index] = el }}
              >
                <PrismicImage
                  field={media.image}
                  onClick={(e) => state.showOverlay ? handleClose() : handleOpen(e, index)}
                  style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
                />
              </ZoomMedia>
            )}
          </div>
        )
      })}
    </>
  )
}

GalleryOverview2x2Section.displayName = "GalleryOverview2x2Section"
