import React, {FC} from 'react'

import styles from './video.module.css'
import {videoClasses} from "./video.classes"
import {combineClasses} from "../../utils/combineClasses";

type Props = {
  source: string
  className?: string
  aspectSquare?: boolean
  autoHeight?: boolean
}

/**
 * Media component (homepage full-width video)
 * @param source
 * @param className
 * @param videoclassnames
 * @param autoHeight
 * @constructor
 */
export const Video: FC<Props> = ({ source, className, aspectSquare, autoHeight }) => {
  return (
    <div className={combineClasses('flex items-center h-[100%]', className || styles.videoGradient)}>
      <video
        src={source}
        className={videoClasses.root({ autoHeight, aspectSquare })}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}
