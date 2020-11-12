import React from 'react'
import { ContactUserContainer } from './style'

export default function ContactUser({
  user = {},
  selected = false,
  onClickStar = () => { },
  onClickUser = () => { },
}) {
  return (
    <ContactUserContainer onClick={onClickUser} className={selected ? "selected" : ""}>
      <img
        src={'https://static.thenounproject.com/png/17241-200.png'}
        width={40}
        height={40}
        alt='logo'
        style={{ borderRadius: '50%' }}
      />
      <div className='info'>
        <div className='info-row'>
          <span className='info--username'>{`${user.firstName} ${user.lastName}`}</span>
          <span className='info--time'>1h</span>
        </div>
        <div className='info-row'>
          <span className='info--email'>{user.email}</span>
          <i className={`fas fa-star ${user.isFavorite ? 'active' : 'inactive'}`} onClick={onClickStar}></i>
        </div>
      </div>
    </ContactUserContainer>
  )
}
