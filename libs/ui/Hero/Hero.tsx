import { FC } from "react"

import { Video } from "../Video/Video"
import { AnimatedArrow } from "./AnimatedArrow"

const DEFAULT_VIDEO = "/intro_accueil.mp4"

export const Hero: FC<any> = ({ slice }) => {
  const videoSource = slice?.primary?.video?.url ?? DEFAULT_VIDEO

  return (
    <header className="relative">
      <AnimatedArrow />
      <Video source={videoSource} />
    </header>
  )
}

Hero.displayName = "Hero"
