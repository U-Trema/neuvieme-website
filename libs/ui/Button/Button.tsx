import React, {createElement, FC, ReactNode} from 'react'
import Link from "next/link"
import {buttonClasses} from "./button.classes"
import {ChevronDown} from "../icons/ChevronDown"
import {Variants} from "../../types/global.types"

type Props = {
  label: string | ReactNode
  variant?: Variants
  as?: 'a' | 'button'
  onClick?: () => void
  href?: string
  target?: '_blank' | '_self'
  rightIcon?: ReactNode
}

export const Button: FC<Props> = ({ label, variant = 'orange', as = 'a', onClick, href = '/', target, rightIcon }) => {
  return (
    <div className={buttonClasses.container({ variant })}>
      {createElement(
        as === 'a'
          ? () =>
            <Link href={href} target={target} className={buttonClasses.root({ variant, withRightIcon: Boolean(rightIcon) })}>
              {label}
              {rightIcon && <ChevronDown />}
            </Link>
          : as,
        {
          ...(onClick && { onClick }),
          className: buttonClasses.root({ variant, withRightIcon: Boolean(rightIcon) })
        },
        label,
        rightIcon
      )}
    </div>
  )
}
