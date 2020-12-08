import React, { useEffect, useState, useRef, useContext } from 'react'
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import { ThemeContext } from './ThemeContext';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function ChatRoom() {
  const user = useSelector(selectUser)
  const dummy = useRef();
  const { isDarkMode } = useContext(ThemeContext);

  const chatStyles = {
    background: isDarkMode? 'white' : '#1c1e21',
    border: isDarkMode ? '2px solid #e9e9eb' : '2px solid #3E4042' 
  }

  const formInputStyles = {
    background: isDarkMode? '#f0f2f5' : '#3a3b3c',
    color: isDarkMode? '#050505' : '#E4E6EB'
  }

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => (
        { id: doc.id, message: doc.data() }
      )))
    })
  }, []);

  const sendMessage = async event => {
    event.preventDefault();
    await db.collection('messages').add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  const deleteAll = (e) => {
    e.preventDefault()
    // extract all the ids out of the messages
    let messageIds = []
    messages.forEach(message => {
      messageIds.push(message.id)
    }) 
    // loop over the ids and delete from firestore
    if(messageIds.length > 0) {
      messageIds.forEach(id => {
        db.collection('messages').doc(id).delete()
      })
    }
  };

  return (
  <div style={chatStyles}>
    <main>
      
      {messages.map(({ id, message }) => (
        <Message 
          key={id} 
          messageID={id} 
          user={message.user} 
          message={message}
        />
      ))}
      
      <span ref={dummy}></span>

    </main>

    <form >
      
      <input style={formInputStyles} placeholder='Type a message...' value={input} onChange={event => setInput(event.target.value)}/>
      
      <IconButton 
        variant='contained' 
        color='primary' 
        disabled={!input} 
        type='submit' 
        onClick={sendMessage}
      ><SendIcon/>
      </IconButton>

      <IconButton
        color='secondary'
        onClick={deleteAll}
      ><ClearAllIcon />
      </IconButton>
    </form>    
    
  </div>)
}

export default ChatRoom