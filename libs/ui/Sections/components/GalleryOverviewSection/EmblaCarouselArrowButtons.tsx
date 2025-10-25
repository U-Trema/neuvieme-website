import React, { useCallback, useEffect, useState } from 'react'
import {Button} from "../../../Button/Button";
import {ChevronDown} from "../../../icons/ChevronDown";

export const usePrevNextButtons = (emblaApi: any) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props: any) => {
  const { children, ...restProps } = props

  return (
    <div className='w-fit'>
      <Button
        variant='pink'
        as='button'
        rounded
        label={
          <>
            <ChevronDown className='rotate-90' />
            {children}
          </>
        }
        {...restProps}
      />
    </div>
  )
}

export const NextButton = (props: any) => {
  const { children, ...restProps } = props

  return (
    <div className='w-fit'>
      <Button
        variant='pink'
        as='button'
        rounded
        label={
          <>
            <ChevronDown className='rotate-270' />
            {children}
          </>
        }
        {...restProps}
      />
    </div>
  )
}
