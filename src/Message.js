import React, { forwardRef, useContext } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from '@material-ui/core';
import db from './firebase';
import { ThemeContext } from './ThemeContext';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Message = forwardRef(({ message, user, messageID }, ref) => {
  const currentAppUser = useSelector(selectUser);

  const isUser = currentAppUser.uid === message.user.uid;
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Avatar src={user.photo}/>

      <div className={isUser ? 'message__userCard' : isDarkMode ? 'message__guestCard' : 'message__guestCard__darkMode'}>
        <p>          
          {!isUser && `${user.displayName || 'Unkown User'}:`} {message.message}
        </p>
        
        {isUser && 
          <IconButton 
            className='message__delete' 
            color='secondary'
            onClick={() => db.collection('messages').doc(messageID).delete()}
          ><HighlightOffIcon />            
          </IconButton>
        }

      </div>
    </div>
  )
});

export default Message;