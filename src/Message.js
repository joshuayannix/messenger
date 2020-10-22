import React, { forwardRef, useContext } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from '@material-ui/core';
import db from './firebase';
import { ThemeContext } from './ThemeContext';

const Message = forwardRef(({ message, username, messageID }, ref) => {
  const isUser = username === message.username;
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <div className={isUser ? 'message__userCard' : isDarkMode ? 'message__guestCard' : 'message__guestCard__darkMode'}>

        <p>{!isUser && `${message.username || 'Unkown User'}:`} {message.message}</p>
        
        {isUser && <IconButton className='message__delete' color='secondary'onClick={() => db.collection('messages').doc(messageID).delete()} >            
          <HighlightOffIcon />            
        </IconButton>}

      </div>
    </div>
  )
});

export default Message;