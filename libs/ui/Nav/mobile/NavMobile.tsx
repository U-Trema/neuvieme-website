import React, {useState} from 'react'
import Link from "next/link"
import {useRouter} from "next/router"

import {LogoMobile} from "../../icons/LogoMobile"
import {navLinkClasses, navMobileClasses} from "./navMobile.classes"
import {BurgerMenu} from "../../BurgerMenu/BurgerMenu"
import {Button} from "../../Button/Button";
import {prismicToNextColor} from "../../../utils/btnColor";
import {LanguageSwitcher} from "../../../../components/LanguageSwitcher/LanguageSwitcher";

export const NavMobile = ({ nav }: any) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const {languages = [], principal = [], dropdown = []} = nav || {}

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle('overflow-hidden')
  }

  return (
    <nav className={navMobileClasses.wrapper({ index: router.route === '/', open: isOpen })}>
      <div className='flex items-center justify-between w-full z-[2001] relative pt-32 px-24'>
        <Link href="/" className='table'><LogoMobile /></Link>
        <BurgerMenu onClick={toggleMenu} isOpen={isOpen} />
      </div>

      <div className={navMobileClasses.root({ open: isOpen })}>
        <div className={navLinkClasses.root({ open: isOpen })}>
          <ul className='flex flex-col gap-64'>
            {dropdown.map(({button_link}: {button_link: any}, index: number) => (
              <li key={index} className={navMobileClasses.link({ open: isOpen })}>
                <Link href={button_link?.url}>{button_link?.text}</Link>
              </li>
            ))}
            {principal.map(({button_link}: {button_link: any}, index: number) => (
              <li key={index} className={navMobileClasses.link({ open: isOpen })}>
                <Link href={button_link?.url}>{button_link.text}</Link>
              </li>
            ))}
            <LanguageSwitcher languages={languages} />{/* ui */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
