import React from 'react'
import { MyInputContainer } from './style'

export default function MyInput({
  containerStyle = {},
  width = '100%',
  placeholder = '',
  value = '',
  onChange = () => {}
}) {
  return (
    <MyInputContainer
      width={width}
      style={containerStyle}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
