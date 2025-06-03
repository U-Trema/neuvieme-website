import React from 'react';
import {Button} from "../../libs/ui/Button/Button";
import {DropDown} from "../../libs/ui/DropDown/DropDown";

import { useRouter } from 'next/router'
import {Scroll} from "../../libs/ui/Scroll/Scroll";

const Test = () => {
  const router = useRouter()

  const list = [
    {
      as: 'a' as const,
      label: 'Label',
      href: '#',
      active: false,
    },
    {
      as: 'a' as const,
      label: 'Label 2',
      href: '#',
      active: router.route === '/test'
    },
    {
      as: 'p' as const,
      label: 'Label 3',
      onClick: () => console.log('test'),
      active: false
    },
  ]

  return (
    <div style={{ background: 'darkslateblue', position: 'relative' }}>
      <Scroll />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 200, gap: 20 }}>
        <Button label='Label' variant='orange' as='a' href='#' />
        <Button label='Label' variant='violet' as='a' href='#' />
        <Button label='Label' variant='pink' as='a' href='#' />
        <DropDown list={list} label='Realisations' />
        <Button label='Label' variant='red' as='a' href='#' />
        <Button label='Label' variant='yellowDark' as='a' href='#' />
        <Button label='Label' variant='yellow' as='a' href='#' />
      </div>

    </div>
  );
};

export default Test;
