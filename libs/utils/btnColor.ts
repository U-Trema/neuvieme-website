import {Variants} from "../types/global.types";

const colorsMap: Record<string, Variants> = {
  Violet: 'violet',
  Rose: 'pink',
  Rouge: 'red',
  Orange: 'orange',
  "Jaune 1": 'yellow',
  "Jaune 2": 'yellowDark',
}

export function prismicToNextColor(color: string): Variants { return colorsMap[color] || colorsMap.Violet }
