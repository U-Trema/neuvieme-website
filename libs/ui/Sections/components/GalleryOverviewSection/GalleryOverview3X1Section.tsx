import React, {FC} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import {NextButton, PrevButton, usePrevNextButtons} from "./EmblaCarouselArrowButtons";
import {Gallery3X1Media} from "../Gallery3X1Media";
import {useViewportSize} from "@mantine/hooks";

type Props = any

const EmblaCarousel = (props: any) => {
  const {slides, options} = props
  const { width } = useViewportSize()
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 15000 })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const slidesPerView = width >= 768 ? 3 : 1.5 // en mobile 1.5
  const slideStyle = {
    flex: `0 0 calc(${100 / slidesPerView}%)`,
    minWidth: 0
  }

  return (
    <section className="embla" style={{[('--slides-per-view' as any)]: slidesPerView}}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide: any, index: number) => (
            <div className="embla__slide" key={index} style={slideStyle}>
              <div className="embla__slide__number">
                <Gallery3X1Media media={slide} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
        </div>
      </div>
    </section>
  )
}

const OPTIONS = {loop: true}

export const GalleryOverview3X1Section: FC<Props> = ({slice}) => {
  if (!slice.primary.items.length) return null

  return (
    <div className='gallery_overview_3x1_section md:pl-[152px] pt-64 md:pt-120 pb-64 md:pb-160 overflow-hidden'>
      <EmblaCarousel slides={slice.primary.items} options={OPTIONS}/>
    </div>
  )
}
