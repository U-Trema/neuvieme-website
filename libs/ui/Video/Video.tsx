import React, {FC} from 'react';
import styles from './video.module.css';
import {videoClasses} from "./video.classes";

type Props = {
  source: string
}

/**
 * Video component (homepage full-width video)
 * @param source
 * @constructor
 */
export const Video: FC<Props> = ({ source }) => {
  return (
    <div className={styles.videoGradient}>
      <video
        src={source}
        className={videoClasses.root()}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};
