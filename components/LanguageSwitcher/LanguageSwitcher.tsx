import {useRouter} from 'next/router'

import {Button} from "../../libs/ui/Button/Button"
import {prismicToNextLocale} from "../../libs/utils/locales"

type Language = {
  label: string
  code: string
  active: boolean
}

type LanguageSwitcherProps = {
  languages: Language[]
  isUiButton?: boolean
}

export function LanguageSwitcher({languages, isUiButton = false}: any) {
  const router = useRouter()

  const handleLocaleChange = (locale: string) => (
    router.push(router.pathname, router.asPath, {locale: prismicToNextLocale(locale)})
  )

  return (
    <div className={isUiButton ? 'flex gap-4' : 'flex gap-12'}>
      {languages
        .filter(({active}) => active)
        .map(({code, label}) => {
          const isActive = prismicToNextLocale(code) === router.locale

          return isUiButton ? (
            <Button
              key={code}
              label={label}
              isActive={isActive}
              onClick={() => handleLocaleChange(code)}
              variant='yellowDark'
              as='button'
            />
          ) : (
            <button
              key={code}
              onClick={() => handleLocaleChange(code)}
              className={`leading-[150%] cursor-pointer ${isActive ? 'font-bold underline' : ''}`}
            >
              {label}
            </button>
          )
        })}
    </div>
  )
}
