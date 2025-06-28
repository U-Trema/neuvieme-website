const prismicLocaleMap: Record<string, string> = {
  fr: 'fr-fr',
  en: 'en-us',
}

const nextLocaleMap: Record<string, string> = {
  'fr-fr': 'fr',
  'en-us': 'en',
}

export const nextToPrismicLocale = (nextLocale: string): string => (
  prismicLocaleMap[nextLocale] || prismicLocaleMap.fr
)

export const prismicToNextLocale = (prismicLocale: string): string => (
  nextLocaleMap[prismicLocale] || nextLocaleMap['fr-fr']
)
