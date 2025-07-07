import {useRouter} from 'next/router'

import {Button} from "../../libs/ui/Button/Button"
import {prismicToNextLocale} from "../../libs/utils/locales"
import {prismicToNextColor} from "../../libs/utils/btnColor"

export function LanguageSwitcher({languages, asButton}: any) {
  const router = useRouter()

  const handleLocaleChange = (locale: string) => (
    router.push(router.pathname, router.asPath, {locale: prismicToNextLocale(locale)})
  )

  return (
    <div className='flex gap-12'>
      {languages
        .filter(({active}: { active: boolean }) => active)
        .map(({code, label, button_color}: { code: string; label: string; button_color: string }) => {
          const isActive = prismicToNextLocale(code) === router.locale

          return asButton ? (
            <Button
              key={code}
              label={label}
              isActive={isActive}
              onClick={() => handleLocaleChange(code)}
              variant={prismicToNextColor(button_color)}
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
