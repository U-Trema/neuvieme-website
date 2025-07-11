import React, {FC} from 'react'
import {PrismicImage} from '@prismicio/react'
import {FilledLinkToMediaField} from "@prismicio/client";

import {Embed} from '../Embed/Embed'
import {Video} from "../Video/Video"
import {SideMediaContentSliceMediaRightPrimaryMediasItem} from "../../../prismicio-types"
import {combineClasses} from "../../utils/combineClasses";

type Props = {
  media: SideMediaContentSliceMediaRightPrimaryMediasItem
  className?: string
}

export const Media: FC<Props> = ({media, className}) => {
  if ((media?.video as FilledLinkToMediaField)?.url) return <Video source={(media.video as FilledLinkToMediaField).url} className={className} autoHeight />
  if (media?.embed?.html) return <Embed embed={media.embed} className={className} />
  if (media?.image?.url) return <PrismicImage field={media.image} className={className} />

  return null
}
