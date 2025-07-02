import React, {FC, useEffect, useState} from 'react'
import Link from "next/link"
import {useRouter} from "next/router"

import {Logo} from "../../icons/Logo"
import {DropDown} from "../../DropDown/DropDown"
import {Button} from "../../Button/Button"
import {navClasses} from "./nav.classes"
import {combineClasses} from "../../../utils/combineClasses"
import {LanguageSwitcher} from "../../../../components/LanguageSwitcher/LanguageSwitcher"
import {prismicToNextColor} from "../../../utils/btnColor"

type Props = {
  nav: any
  scrollInfo: {
    scrollY: number
    scrollX: number
  }
}

export const Nav: FC<Props> = ({nav, scrollInfo}) => {
  const router = useRouter()
  const [top, setTop] = useState<string>('-100%')

  const {languages = [], principal = [], dropdown = [], dropdown_label, dropdown_color} = nav || {}

  useEffect(() => {
    if (router.route !== '/') return
    if (scrollInfo.scrollY > 400) return

    setTop(`${-(100 - (scrollInfo.scrollY / 4))}%`)
  }, [scrollInfo.scrollY])

  const list = dropdown.map(({button_link}: {button_link: any}) => ({
    as: 'a' as const,
    label: button_link.text,
    href: button_link?.url,
    active: router.asPath === button_link?.url
  }))

  const style = router.route === '/' ? { '--before-top': top } as any : null

  return (
    <nav style={style} className={combineClasses(navClasses.root({ index: router.route === '/' }), 'animate-bg')}>
      <Link href="/" className='table'><Logo /></Link>

      <ul className='items-center flex gap-32'>
        <li><DropDown list={list} label={dropdown_label} variant={dropdown_color} /></li>

        {principal.map(({button_link, button_color}: {button_link: any; button_color: any}, index: number) => (
          <li key={index}><Button label={button_link.text} variant={prismicToNextColor(button_color)} as='a' href={button_link?.url || '#'} /></li>
        ))}

        <li className='flex gap-4'>
          {languages && <LanguageSwitcher languages={languages} />}
        </li>
      </ul>
    </nav>
  )
}
