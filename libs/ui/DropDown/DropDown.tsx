import React, {createElement, FC, useState} from 'react'
import {Button} from "../Button/Button"
import {dropDownClasses} from "./dropdown.classes"
import {ChevronDown} from "../icons/ChevronDown"
import Check from "../icons/Check"
import {useOutsideClick} from "../../hooks/useOutsideClick"
import Link from "next/link"

type Item = {
  as: 'a' | 'p'
  href?: string
  label: string
  active?: boolean
  onClick?: () => void
}

export type Props = {
  list: Item[]
  label: string
}

export const DropDown: FC<Props> = ({ list, label }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false)
  })

  return (
    <div ref={dropdownRef} className='relative'>
      <Button
        as='button'
        variant='violet'
        label={label}
        onClick={toggle}
        rightIcon={<ChevronDown />}
      />

      <div className={dropDownClasses.container({ open: isOpen })}>
        <div className={dropDownClasses.root()}>
          <ul>
            {list.map((item, index) => {
              return (
                <li key={index} className={dropDownClasses.list({ active: item.active })}>
                  {createElement(
                    item.as === 'a'
                      ? () => {
                        return (
                          <Link
                            href={item.href || '#'}
                            onClick={() => {
                              if (item.onClick) {
                                item.onClick()
                              }
                              setIsOpen(false)
                            }}
                            className='relative z-1 block select-none'
                          >
                            {item.label}
                          </Link>
                        )
                      }
                      : item.as,
                    {
                      className: 'relative z-1 block select-none',
                      ...((item.href) && { href: item?.href }),
                      onClick: () => {
                        setIsOpen(false)
                        if (item.onClick) item.onClick()
                      },
                    },
                    item.label
                  )}

                  {item.active && <Check />}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
