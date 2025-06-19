import React, {FC} from 'react'

type Props = {
  width?: number
  height?: number
}

const Check: FC<Props> = ({ width = 24, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.55008 17.3081L4.58008 12.3381L5.29408 11.6251L9.55008 15.8811L18.7061 6.7251L19.4191 7.4391L9.55008 17.3081Z" fill="white"/>
    </svg>
  )
}

export default Check
