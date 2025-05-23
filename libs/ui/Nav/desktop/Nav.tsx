import React, {FC, useEffect, useState} from 'react';
import {Logo} from "../../icons/Logo";
import Link from "next/link";
import {DropDown} from "../../DropDown/DropDown";
import {useRouter} from "next/router";
import {Button} from "../../Button/Button";
import {navClasses} from "./nav.classes";
import {combineClasses} from "../../../utils/combineClasses";

type Props = {
  scrollInfo: {
    scrollY: number
    scrollX: number
  }
}

export const Nav: FC<Props> = ({ scrollInfo }) => {
  const router = useRouter()
  const [top, setTop] = useState<string>('-100%');

  useEffect(() => {
    if (router.route !== '/') return
    if (scrollInfo.scrollY > 400) return

    setTop(`${-(100 - (scrollInfo.scrollY / 4))}%`)
  }, [scrollInfo.scrollY]);

  const list = [
    {
      as: 'a' as const,
      label: 'Digital',
      href: '#',
      active: false,
    },
    {
      as: 'a' as const,
      label: 'Publicité',
      href: '/test',
      active: router.route === '/test'
    },
    {
      as: 'p' as const,
      label: 'Production audiovisuelle',
      onClick: () => console.log('test'),
      active: false
    },
  ]

  const style = router.route === '/' ? { '--before-top': top } as any : null

  return (
    <nav style={style} className={combineClasses(navClasses.root({ index: router.route === '/' }), 'animate-bg')}>
      <Link href="/" className='table'><Logo /></Link>

      <ul className='items-center flex gap-32'>
        <li><DropDown list={list} label='Réalisation' /></li>

        <li><Button label='À propos' variant='orange' as='a' href='/' /></li>

        <li className='flex gap-4'>
          <Button label='FR' variant='yellowDark' as='button' onClick={() => console.log('change lang')} />
          <Button label='EN' variant='yellowDark' as='button' onClick={() => console.log('change lang')} />
        </li>
      </ul>
    </nav>
  );
};
