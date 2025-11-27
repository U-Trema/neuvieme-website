import React, {FC} from "react";
import {PrismicImage} from "@prismicio/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {NextButton, PrevButton, usePrevNextButtons} from "./EmblaCarouselArrowButtons";
import {Media} from "../../../libs/ui/Media/Media";

type Props = {
  defaultImage: any
  carousel?: any[]
}

const OPTIONS = { loop: true }

export const ProductCarousel: FC<Props> = ({ defaultImage, carousel }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  if (!carousel?.length) {
    return (
      <PrismicImage field={defaultImage} style={{ display: 'block', width: '400px', height: '400px' }} />
    )
  }

  return (
    <div className='productCarousel' onClick={e => e.stopPropagation()}>
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carousel?.map((item: any, index: number) => {
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <Media media={item} className='h-full' />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
    </div>
  )
}
