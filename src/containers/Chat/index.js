import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import { useHistory } from 'react-router-dom';
import ContactUser from '../../components/ContactUser';
import MessageItem from '../../components/MessageItem';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import MySelect from '../../components/MySelect';
import { mockUsers } from '../../services'
import { colors } from '../../styles';
import { ChatContainer } from './style';

export default function Chat() {

  const history = useHistory()
  const [users, setUsers] = useState(mockUsers)
  const [search, setSearch] = useState('')
  const [filterOption, setFilterOption] = useState('0')
  const [selectedID, setSelectedID] = useState(null);

  const onClickStar = (user) => {
    setUsers(users.map(_user => {
      if (_user.id === user.id) {
        return { ..._user, isFavorite: user.isFavorite ? false : true }
      }
      return _user
    }))
  }
  const onClickUser = (user) => {
    if (user.id === selectedID) {
      setSelectedID(null);
    }
    else {
      setSelectedID(user.id);
    }
    history.push(`/?user=${user.id}`)
  }

  const onChangeSearch = (e) => {
    const value = e.target.value
    setSearch(value)

    // eslint-disable-next-line array-callback-return
    setUsers(mockUsers.filter(_user => {
      const fullName = `${_user.firstName} ${_user.lastName}`
      if (fullName.toUpperCase().includes(value.toUpperCase())) {
        return _user
      }
    }))
  }

  const onChangeOption = (e) => {
    const value = e.target.value
    setFilterOption(value)
    setSearch('')
    if (value === '0') {
      setUsers(mockUsers)
      return
    } else {
      // eslint-disable-next-line array-callback-return
      setUsers(mockUsers.filter(_user => {
        const tempValue = value === '1' ? true : false
        if (_user.isFavorite === tempValue) {
          return _user
        }
      }))
    }
  }
  return (
    <ChatContainer>
      <div className='left-side'>
        <div className='left-side-header'>
          <div className='header-row'>
            <MyInput
              containerStyle={{ marginRight: 20 }}
              placeholder='Search or a new chat...'
              value={search}
              onChange={onChangeSearch}
            />
            <MyButton className='btn-add-user' width='50px' style={{ background: colors.grayDark, color: 'white' }} onClick={() => console.log("here")}>
              <i className="fal fa-comment-medical" style={{ fontSize: 24 }}></i>
            </MyButton>
          </div>
          <div className='header-row'>
            <MySelect
              containerStyle={{ marginRight: 20 }}
              options={[
                { value: '0', label: 'All conversations' },
                { value: '1', label: 'Favourite' },
                { value: '2', label: 'Not favourite' },
              ]}
              value={filterOption}
              onChange={onChangeOption}
            />
            <MyButton width='150px' onClick={() => console.log("here")}>Follow up</MyButton>
          </div>
        </div>
        <Scrollbars autoHide style={{ flex: 1 }}>
          {users.map((_user, _i) =>
            <ContactUser
              key={_i}
              user={_user}
              selected={selectedID === _user.id ? true : false}
              onClickUser={() => onClickUser(_user)}
              onClickStar={() => onClickStar(_user)}
            />
          )}
        </Scrollbars>
      </div>
      {selectedID ?
      <div className='messagebox-container'>
        <Scrollbars autoHide style={{ flex: 1 }}>
          <div className='messagebox'>
            <MessageItem position='left' />
            <MessageItem position='right' />
            <MessageItem position='left' />
            <MessageItem position='right' />
            <MessageItem position='left' />
            <MessageItem position='right' />
            <MessageItem position='right' />
            <MessageItem position='right' />
          </div>
        </Scrollbars>
        <div className='message-input-container'>
          <div className='message-input'>
            <MyInput placeholder='Input your message...' />
          </div>
        </div>
      </div>
      :
      <div className="blank">
        <h1>Select a conversation</h1>
        <p>Start by selecting a conversation or searching for some specific</p>
      </div>
      }
    </ChatContainer>
  )
}
