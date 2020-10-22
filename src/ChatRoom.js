import React, { useEffect, useState, useRef, useContext } from 'react'
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import { ThemeContext } from './ThemeContext';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function ChatRoom() {
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
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => (
        { id: doc.id, message: doc.data() }
      )))
    })
  }, []);

  // useEffect(() => {
  //   setUsername(prompt('Please enter your name'));
  // }, [] );

  const sendMessage = async event => {
    event.preventDefault();
    await db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <div style={chatStyles}>
    <main>
      
      {messages.map(({ id, message }) => (<Message key={id} messageID={id} username={username} message={message}/>))}
      
      <span ref={dummy}></span>

    </main>

    <form >
      
      <input style={formInputStyles} placeholder='Type a message...' value={input} onChange={event => setInput(event.target.value)}/>
      
      <IconButton color='primary' disabled={!input} type='submit' onClick={sendMessage}><SendIcon/></IconButton>
    </form>    
    
  </div>)
}

export default ChatRoom
