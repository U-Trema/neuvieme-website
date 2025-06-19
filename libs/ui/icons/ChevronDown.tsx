import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

export const ChevronDown: FC<Props> = ({ width = 24, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.84009 9.58989L11.5001 15.2499L17.1601 9.58989L16.4501 8.88989L11.5001 13.8399L6.55009 8.88989L5.84009 9.58989Z" fill="white"/>
    </svg>
  )
}
