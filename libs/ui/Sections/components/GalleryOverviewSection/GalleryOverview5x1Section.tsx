import React, {FC} from "react"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import {PrismicImage} from "@prismicio/react";
import {useViewportSize} from "@mantine/hooks";

type Props = any

const EmblaCarousel = (props: any) => {
  const { slides, options } = props
  const { width } = useViewportSize()
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const slidesPerView = width >= 768 ? 3 : 1.5
  const slideStyle = {
    flex: `0 0 calc(${100 / slidesPerView}% - ${100 * (slidesPerView - 1) / slidesPerView}px)`,
    minWidth: 0
  }

  return (
    <section className="embla" style={{ [('--slides-per-view' as any)]: slidesPerView }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide: any, index: number) => (
            <div className="embla__slide" key={index} style={slideStyle}>
              <div className="embla__slide__number">
                <PrismicImage field={slide.image} className='h-full w-full object-cover' />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

const OPTIONS = { loop: true }

// https://codesandbox.io/p/sandbox/rmcj2l?file=%2Fsrc%2Fjs%2FEmblaCarousel.jsx
export const GalleryOverview5x1Section: FC<Props> = ({ slice }) => {
  if (!slice.primary.items.length) return null

  return (
    <div className='gallery_overview_5x1_section md:pl-[152px] pt-40 md:pt-120 md:pb-160 overflow-hidden'>
      <EmblaCarousel slides={slice.primary.items} options={OPTIONS} />
    </div>
  )
}

GalleryOverview5x1Section.displayName = "GalleryOverview5x1Section"
