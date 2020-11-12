import React from 'react'
import { MyButtonContainer } from './style'

export default function MyButton({
  children,
  style = {},
  width = '30px',
  onClick = () => {}
}) {
  return (
    <MyButtonContainer
      style={style}
      width={width}
      onClick={onClick}
    >
      {children}
    </MyButtonContainer>
  )
}
