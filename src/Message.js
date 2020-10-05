import React, { forwardRef } from 'react';
import './Message.css';
import { Card, CardContent, Typography } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from '@material-ui/core';
import db from './firebase';

const Message = forwardRef(({ message, username, messageID }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
        <CardContent>
          <Typography           
            variant='h5'
            component='h2'
          >
            {!isUser && `${message.username || 'Unkown User'}:`} {message.message}
            
          </Typography>

          <IconButton         
            color='secondary' 
            onClick={event => db.collection('messages').doc(messageID).delete()} 
          >            
            <HighlightOffIcon />            
          </IconButton>

        </CardContent>
      </Card>
    </div>
  )
});

export default Message;