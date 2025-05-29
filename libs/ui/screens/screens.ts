import {tailwindConfig} from "./resolvedConfig";


export const screenConfig = tailwindConfig.theme.screens

export type ScreenConfig = typeof screenConfig
export type Screen = keyof ScreenConfig
export type ScreensProps<T> = Partial<Record<Screen, T>>
export type ScreenThresholdType = 'min' | 'max'
// export type MediaQueryThreshold = `${ScreenThresholdType}-${Screen}`
