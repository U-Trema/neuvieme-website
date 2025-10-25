import {Media} from "../../Media/Media";

export const Gallery3X1Media = ({ media }: any) => {
  if (media.video_aws?.length) {
    return (
      <video src={media.video_aws} autoPlay loop playsInline muted className='h-full block object-cover' />
    )
  }

  return <Media media={media} className='h-full w-full object-cover' />
}
