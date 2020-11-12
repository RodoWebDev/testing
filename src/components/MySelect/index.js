import React from 'react'
import { MySelectContainer } from './style'

export default function MySelect({
  options = [],
  containerStyle = {},
  value = '',
  onChange = () => {}
}) {
  return (
    <MySelectContainer
      style={containerStyle}
      value={value}
      onChange={onChange}
    >
      {options.map((_option, _i) =>
        <option key={_i} value={_option.value}>{_option.label}</option>
      )}
    </MySelectContainer>
  )
}
