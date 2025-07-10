import React, {FC} from 'react'

import styles from './video.module.css'
import {videoClasses} from "./video.classes"

type Props = {
  source: string
  className?: string
}

/**
 * Media component (homepage full-width video)
 * @param source
 * @param className
 * @constructor
 */
export const Video: FC<Props> = ({ source, className }) => {
  return (
    <div className={className || styles.videoGradient}>
      <video
        src={source}
        className={videoClasses.root()}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}
