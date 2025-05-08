import React from 'react';
import {Logo} from "../icons/Logo";
import Link from "next/link";
import {DropDown} from "../DropDown/DropDown";
import {useRouter} from "next/router";
import {Button} from "../Button/Button";

export const Nav = () => {
  const router = useRouter()

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

  return (
    <nav className='p-40 flex justify-between text-sm'>
      <Link href="/" className='table'><Logo /></Link>

      <ul className='items-center flex gap-32'>
        <li><DropDown list={list} label='Réalisation' /></li>

        <li><Button label='À propos' variant='orange' as='a' href='/' /></li>

        <li className='flex gap-4'>
          <Button label='FR' variant='yellowDark' as='button' onClick={() => console.log('change la lang')} />
          <Button label='EN' variant='yellowDark' as='button' onClick={() => console.log('change la lang')} />
        </li>
      </ul>
    </nav>
  );
};
