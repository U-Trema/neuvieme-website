import React, {useState} from 'react'
import Link from "next/link"
import {useRouter} from "next/router"

import {LogoMobile} from "../../icons/LogoMobile"
import {navLinkClasses, navMobileClasses} from "./navMobile.classes"
import {BurgerMenu} from "../../BurgerMenu/BurgerMenu"

export const NavMobile = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle('overflow-hidden')
  }

  return (
    <nav className={navMobileClasses.root({ index: router.route === '/', open: isOpen })}>
      <div className='flex items-center justify-between w-full'>
        <Link href="/" className='table'><LogoMobile /></Link>
        <BurgerMenu onClick={toggleMenu} isOpen={isOpen} />
      </div>

      <div className={navLinkClasses.root({ open: isOpen })}>
        <ul className='flex flex-col gap-64'>
          <li className={navMobileClasses.link({ open: isOpen })}>communication</li>
          <li className={navMobileClasses.link({ open: isOpen })}>publicité</li>
          <li className={navMobileClasses.link({ open: isOpen })}>production audiovisuel</li>
          <li className={navMobileClasses.link({ open: isOpen })}>à propos</li>
          <li className={navMobileClasses.link({ open: isOpen })}>
            <div className='flex gap-5 justify-center'>
              <div className='underline'>fr</div>
              <div>en</div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
