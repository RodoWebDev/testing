import React from 'react'
import { MessageItemContainer } from './style'

export default function MessageItem({
  position = 'left',
  containerStyle = {marginBottom: 20},
}) {
  return (
    <MessageItemContainer className={`message-item ${position}`} style={containerStyle}>
      <img src={'https://static.thenounproject.com/png/17241-200.png'} width={40} height={40} alt='logo' style={{borderRadius: '50%'}} />
      <div className='content'>
        <div className='title'>
          <span className='size15 font-hind-bold'>Lalie Martin</span>
          <span className='size13 text-light-gray'>2h</span>
        </div>
        <span className='size13'>Here are you in a meeting here in a out front and please let me know when We I need you and please let me know when we can get a meeting for company and please let me know when you get a second please let me know what</span>
      </div>
    </MessageItemContainer>
  )
}
