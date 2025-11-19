import React, { useRef, useState, useEffect, useCallback } from "react";

export const VideoWithControls = ({...props}) => {
  // const { withControls, url, fullscreen, open, close, autoPlay } = props

  const ref_video = useRef<HTMLVideoElement>(null)

  return (
    <video
      loop
      muted
      src={props.url}
      preload="auto"
      controls={true}
      ref={ref_video}
      disablePictureInPicture
      autoPlay={props.autoPlay}
      controlsList='nodownload'
      className='peer block w-full h-full object-cover object-center'
    />
  )
}

/*export const VideoWithControls = ({...props}) => {
  const { withControls, url, fullscreen, open, close, autoPlay } = props

  const ref_video = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | null>(null)

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (ref_video.current) {
      if (ref_video.current.paused) {
        ref_video.current.play()
        setIsPlaying(true)
      } else {
        ref_video.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const updateProgress = () => {
    if (ref_video.current && !ref_video.current.paused) {
      const currentTime = ref_video.current.currentTime
      const duration = ref_video.current.duration

      if (duration > 0) {
        const newProgress = (currentTime / duration) * 100

        setProgress(prev => {
          if (Math.abs(newProgress - prev) > 1) {
            return newProgress
          }
          return prev
        })
      }

      rafRef.current = requestAnimationFrame(updateProgress)
    }
  }

  useEffect(() => {
    if (isPlaying) {
      rafRef.current = requestAnimationFrame(updateProgress)
    } else {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isPlaying])

  useEffect(() => {
    setProgress(0)
  }, [url])

  return (
    <>
      <video
        loop
        muted
        src={url}
        ref={ref_video}
        preload="metadata"
        disablePictureInPicture
        controls={withControls}
        autoPlay={props.autoPlay}
        controlsList='nodownload nofullscreen'
        className='peer block w-full h-full object-cover object-center'
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className='pl-24 flex gap-9 absolute bottom-0 bg-gray-800 w-full p-4'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gray-600'>
          <div
            className='h-full bg-red-500 transition-all duration-100 ease-linear'
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className='cursor-pointer p-4'>
          {isPlaying ? (
            <svg onClick={togglePlayPause} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M522-208v-544h230v544H522Zm-314 0v-544h230v544H208Zm389-75h80v-394h-80v394Zm-314 0h80v-394h-80v394Zm0-394v394-394Zm314 0v394-394Z"/></svg>
          ) : (
            <svg onClick={togglePlayPause} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M327-211v-538l422 269-422 269Zm75-269Zm0 132 207-132-207-132v264Z"/></svg>
          )}
        </div>

        <div className='p-4 cursor-pointer'>
          {fullscreen ? (
            <svg onClick={close} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M249-130v-119H130v-75h194v194h-75Zm387.5 0v-194H830v75H711.5v119h-75ZM130-636.5v-75h119V-830h75v193.5H130Zm506.5 0V-830h75v118.5H830v75H636.5Z"/></svg>
          ) : (
            <svg onClick={open} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M130-130v-194h75v119h119v75H130Zm506.5 0v-75H755v-119h75v194H636.5ZM130-636.5V-830h194v75H205v118.5h-75Zm625 0V-755H636.5v-75H830v193.5h-75Z"/></svg>
          )}
        </div>
      </div>
    </>
  )
}*/

// export const VideoWithControls = ({...props}) => {
//   const { withControls, url, fullscreen, open, close, autoPlay } = props
//
//   const ref_video = useRef<HTMLVideoElement>(null)
//   const [isPlaying, setIsPlaying] = useState(autoPlay)
//
//   const togglePlayPause = (e: React.MouseEvent) => {
//     e.stopPropagation()
//
//     if (ref_video.current) {
//       if (ref_video.current.paused) {
//         ref_video.current.play()
//         setIsPlaying(true)
//       } else {
//         ref_video.current.pause()
//         setIsPlaying(false)
//       }
//     }
//   }
//
//   return (
//     <>
//       <video
//         loop
//         muted
//         src={url}
//         ref={ref_video}
//         disablePictureInPicture
//         controls={withControls}
//         autoPlay={props.autoPlay}
//         controlsList='nodownload nofullscreen'
//         className='peer block w-full h-full object-cover object-center'
//       />
//
//       <div className='pl-24 flex gap-9 absolute bottom-0 bg-gray-800 w-full p-4'>
//         <div className='cursor-pointer p-4'>
//           {isPlaying ? (
//             <svg onClick={togglePlayPause} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M522-208v-544h230v544H522Zm-314 0v-544h230v544H208Zm389-75h80v-394h-80v394Zm-314 0h80v-394h-80v394Zm0-394v394-394Zm314 0v394-394Z"/></svg>
//           ) : (
//             <svg onClick={togglePlayPause} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M327-211v-538l422 269-422 269Zm75-269Zm0 132 207-132-207-132v264Z"/></svg>
//           )}
//         </div>
//
//         <div className='p-4 cursor-pointer'>
//           {fullscreen ? (
//             <svg onClick={close} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M249-130v-119H130v-75h194v194h-75Zm387.5 0v-194H830v75H711.5v119h-75ZM130-636.5v-75h119V-830h75v193.5H130Zm506.5 0V-830h75v118.5H830v75H636.5Z"/></svg>
//           ) : (
//             <svg onClick={open} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M130-130v-194h75v119h119v75H130Zm506.5 0v-75H755v-119h75v194H636.5ZM130-636.5V-830h194v75H205v118.5h-75Zm625 0V-755H636.5v-75H830v193.5h-75Z"/></svg>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }
