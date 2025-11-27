import React, {FC, ReactNode, useState} from "react"
import { Content } from "@prismicio/client"
import {PrismicRichText, SliceComponentProps} from "@prismicio/react"
import {combineClasses} from "../../../libs/utils/combineClasses";
import styles from "../../../components/assiettes.module.css";
import {GradientText} from "../../../libs/ui/GradientText/GradientText";
import {ProductCarousel} from "@/slices/InteractiveCardSphere/ProductCarousel";

/**
 * Props for `InteractiveCardSphere`.
 */
export type InteractiveCardSphereProps =
  SliceComponentProps<Content.InteractiveCardSphereSlice>

const components = {
  paragraph: ({ children }: { children: ReactNode }) => (<p data-text>{children}</p>),
}

type EnrichedCard = Content.InteractiveCardSphereSliceDefaultPrimaryCardsItem & {
  project: Content.ProjectDocument
}

/**
 * Component for "InteractiveCardSphere" Slices.
 */
const InteractiveCardSphere: FC<InteractiveCardSphereProps> = ({ slice }) => {
  const [state, setState] = useState(0)

  if (!slice.primary?.cards?.length) return null
  // todo temporary, to delete when enough data in back-end
  const cards = [...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards, ...slice.primary.cards] as EnrichedCard[]

  const handleClick = (e: any) => {
    if (!e.target.getAttribute('data-id')) return state
    setState(Number(e.target.getAttribute('data-id')))
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={combineClasses(styles.container, 'js-container')}>
        <div className={combineClasses(styles.grid, 'js-grid')}>
          <div className={combineClasses(styles.column, 'js-column')}>
            {cards.map((card, index) => {
              return (
                <div key={index} data-id={index} className={combineClasses(styles.product, 'js-product')}>
                  <div data-video={card.video.text} style={{ width: "100%", height: "100%" }}>
                    <video
                      preload="none"
                      data-id={index}
                      autoPlay={false}
                      src={card.video.text}
                      muted controls={false}
                      onMouseDown={handleClick}
                      style={{objectFit: 'cover'}}
                      poster={card.image.url || ''}
                    />

                    {/*<video>*/}
                    {/*  /!* webM en premier car meilleure qualité *!/*/}
                    {/*  <source src="video-1080p.webm" type="video/webm" />*/}
                    {/*  <source src="video-720p.webm" type="video/webm" />*/}

                    {/*  /!* puis les autres *!/*/}
                    {/*  <source src="video-1080p.mp4" type="video/mp4" />*/}
                    {/*  <source src="video-720p.mp4" type="video/mp4" />*/}
                    {/*</video>*/}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={combineClasses(styles.details, 'js-details')} style={{ position: 'relative' }}>
          <div className={styles.details_wrapper}>
            <div className='absolute right-[20px] top-[70px]'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className={combineClasses(styles.details__title, 'js-details__title')}>
              <p className='font-black leading-40 !text-2xl' data-title="1" data-text>
                <GradientText>{cards[state].title}</GradientText>
              </p>
            </div>

            <div className={combineClasses(styles.details__body, 'js-details__body')}>
              <div className={styles.details__thumb__container}>
                <div className={combineClasses(styles.details__thumb, 'js-details__thumb')}/>
              </div>

              <div className={combineClasses(styles.details__texts, 'js-details__texts')}>
                <div>
                  {cards[state]?.project?.data?.long_text && (
                    <PrismicRichText field={cards[state].project.data.long_text} components={components}/>
                  )}
                </div>

                <div>
                  <ProductCarousel carousel={cards[state].project.data.medias} defaultImage={cards[state]?.image} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={combineClasses(styles.cross, 'js-cross')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className='js-control_buttons' style={{ position: 'fixed', bottom: 120, right: 50, zIndex: 1000, color: '#fff', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <div className='js-scale' style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Zm-40-60v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
        </div>
        <div className='js-unscale' style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400ZM280-540v-80h200v80H280Z"/></svg>
        </div>

        <div className='flex gap-3 items-center'>
          {/*<svg viewBox="0 0 64 64" width={48} height={48} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="32" y1="8" x2="32" y2="56"></line><line x1="56" y1="32" x2="8" y2="32"></line><polyline points="40 16 32 8 24 16"></polyline><polyline points="24 48 32 56 40 48"></polyline><polyline points="48 40 56 32 48 24"></polyline><polyline points="16 24 8 32 16 40"></polyline></g></svg>*/}
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80 310-250l57-57 73 73v-166h80v165l72-73 58 58L480-80ZM250-310 80-480l169-169 57 57-72 72h166v80H235l73 72-58 58Zm460 0-57-57 73-73H560v-80h165l-73-72 58-58 170 170-170 170ZM440-560v-166l-73 73-57-57 170-170 170 170-57 57-73-73v166h-80Z"/></svg>
          <p style={{ fontSize: 14, width: 150, flexShrink: 0, marginBottom: 0, color: '#fff' }}>glisser pour explorer</p>
        </div>
      </div>
    </section>
  )
}

export default InteractiveCardSphere
