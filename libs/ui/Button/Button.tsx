import React, {createElement, FC, ReactNode} from 'react'
import Link from "next/link"
import {buttonClasses} from "./button.classes"
import {ChevronDown} from "../icons/ChevronDown"
import {Variants} from "../../types/global.types"
import {combineClasses} from "../../utils/combineClasses";

type Props = {
  label: string | ReactNode
  variant?: Variants
  as?: 'a' | 'button'
  onClick?: () => void
  href?: string
  target?: '_blank' | '_self'
  rightIcon?: ReactNode
  isActive?: boolean
  classnames?: string
}

export const Button: FC<Props> = ({ label, variant = 'orange', as = 'a', onClick, href = '/', target, rightIcon, isActive = false, classnames }) => {
  return (
    <div className={combineClasses(buttonClasses.container({ variant }), isActive ? `active-status-${variant}` : '', classnames)}>
      {createElement(
        as === 'a'
          ? () =>
            <Link href={href} target={target} className={buttonClasses.root({ variant, withRightIcon: Boolean(rightIcon), isActive })}>
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
