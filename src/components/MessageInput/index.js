import React from 'react'
import { MessageInputContainer } from './style'

export default function MessageInput({
  user = {},
  value = '',
  isSending = false,
  onChange = () => {},
  onSendEmail = () => {},
}) {
  return (
    <MessageInputContainer>
      <input onChange={onChange} />
    </MessageInputContainer>
  )
}
