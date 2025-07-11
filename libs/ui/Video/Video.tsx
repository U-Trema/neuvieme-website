import React, {FC} from 'react'

import styles from './video.module.css'
import {videoClasses} from "./video.classes"

type Props = {
  source: string
  className?: string
  autoHeight?: boolean
}

/**
 * Media component (homepage full-width video)
 * @param source
 * @param className
 * @param autoHeight
 * @constructor
 */
export const Video: FC<Props> = ({ source, className, autoHeight }) => {
  return (
    <div className={className || styles.videoGradient}>
      <video
        src={source}
        className={videoClasses.root({ autoHeight })}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}
