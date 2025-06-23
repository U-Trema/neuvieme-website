import React, {FC, useEffect, useState} from 'react'
import Link from "next/link"
import {useRouter} from "next/router"

import {Logo} from "../../icons/Logo"
import {DropDown} from "../../DropDown/DropDown"
import {Button} from "../../Button/Button"
import {navClasses} from "./nav.classes"
import {combineClasses} from "../../../utils/combineClasses"
import {LanguageSwitcher} from "../../../../components/LanguageSwitcher/LanguageSwitcher";

type Props = {
  nav: any
  scrollInfo: {
    scrollY: number
    scrollX: number
  }
}

export const Nav: FC<Props> = ({ nav, scrollInfo }) => {
  const router = useRouter()
  const [top, setTop] = useState<string>('-100%')

  const {languages = [], principal = [], dropdown = [], dropdown_label} = nav || {}

  useEffect(() => {
    if (router.route !== '/') return
    if (scrollInfo.scrollY > 400) return

    setTop(`${-(100 - (scrollInfo.scrollY / 4))}%`)
  }, [scrollInfo.scrollY])

  const list = dropdown.map(({link, label}) => ({
    as: 'a' as const,
    label,
    href: link?.url,
    active: router.asPath === link?.url
  }))

  const style = router.route === '/' ? { '--before-top': top } as any : null

  return (
    <nav style={style} className={combineClasses(navClasses.root({ index: router.route === '/' }), 'animate-bg')}>
      <Link href="/" className='table'><Logo /></Link>

      <ul className='items-center flex gap-32'>
        <li><DropDown list={list} label={dropdown_label} /></li>

        {principal.map(({label, link}, index) => (
          <li key={index}><Button label={label} variant='orange' as='a' href={link?.url || '#'} /></li>
        ))}

        <li className='flex gap-4'>
          {languages && <LanguageSwitcher languages={languages} isUiButton={true}/>}
        </li>
      </ul>
    </nav>
  )
}
