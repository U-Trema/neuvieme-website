import { keys, merge } from 'lodash-es'

import type { Screen, ScreensProps } from '../screens'
import { useScreensMediaQuery} from "./useScreensMediaQuery"

export const useMergedScreenProps = <T extends {}>(props: T, screens?: ScreensProps<T>) => {
  const screenMatch = useScreensMediaQuery({
    screenList: keys(screens) as Screen[]
  })

  return merge(props, screens?.[screenMatch])
}
