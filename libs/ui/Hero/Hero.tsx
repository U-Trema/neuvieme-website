import React from 'react';
import {Video} from "../Video/Video";
import {AnimatedArrow} from "./AnimatedArrow";

/**
 * homepage hero
 * @constructor
 */
export const Hero = () => {
  return (
    <header className='relative'>
      <AnimatedArrow />
      <Video source='/video_placeholder.mp4' />
    </header>
  );
};
