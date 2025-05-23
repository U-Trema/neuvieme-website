import { useViewportSize } from '@mantine/hooks'
import { map, sortBy } from 'lodash'

import type { Screen, ScreenThresholdType } from '../screens'
import {screenConfig} from "../screens";

const screenListOrdered = sortBy(map(screenConfig, (value, screen) => ({ value, screen })), 'value')

export const computeScreenMatch = ({
  width,
  screenList,
  thresholdType = 'min'
}: {
  width: number
  screenList?: Screen[]
  thresholdType?: ScreenThresholdType
}) => {
  const filteredList = screenList
    ? [...screenListOrdered].filter(s => screenList.includes(s.screen as Screen))
    : [...screenListOrdered]

  const orderedList = thresholdType === 'min' ? filteredList.reverse() : filteredList

  const match = orderedList.find(({ value }) =>
    thresholdType === 'min' ? value <= width : value > width
  )

  return (match ? match.screen : null) as Screen
}

export type UseScreenMediaQueryParams = {
  screenList?: Screen[]
  thresholdType?: ScreenThresholdType
}

export const useScreensMediaQuery = ({
  screenList,
  thresholdType
}: UseScreenMediaQueryParams) => {
  const viewPortSize = useViewportSize()
  const width = viewPortSize?.width // || window?.innerWidth

  return computeScreenMatch({ width, screenList, thresholdType })
}
