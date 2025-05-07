import React, {createElement, FC, ReactNode} from 'react';
import Link from "next/link";
import {buttonClasses} from "./button.classes";

type Props = {
  label: string | ReactNode
  variant?: 'orange' | 'violet' | 'pink' | 'red' | 'yellowDark' | 'yellow'
  as?: 'a' | 'button'
  onClick?: () => void
  href?: string
  target?: '_blank' | '_self'
};

export const Button: FC<Props> = ({ label, variant = 'orange', as = 'a', onClick, href = '/', target }) => {
  return (
    <div className={buttonClasses.container({ variant })}>
      <div className={buttonClasses.gradient()} />
      {createElement(
        as === 'a'
          ? () =>
            <Link href={href} target={target} className={buttonClasses.root({ variant })}>{label}</Link>
          : as,
        {
          ...(onClick && { onClick }),
          className: buttonClasses.root({ variant })
        },
        label
      )}
    </div>
  );
};
