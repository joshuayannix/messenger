import React, { useEffect, useState, useRef, useContext } from 'react'
import FlipMove from 'react-flip-move';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import { ThemeContext } from './ThemeContext';

function ChatRoom() {
  const { isDarkMode } = useContext(ThemeContext);

  const chatStyles = {
    background: isDarkMode? 'white' : '#1c1e21'
  }

  const formInputStyles = {
    background: isDarkMode? '#f0f2f5' : '#3a3b3c',
    color: isDarkMode? '#050505' : '#E4E6EB'
  }

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  
  const dummy = useRef();

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

  const sendMessage = event => {
    event.preventDefault();
    db.collection('messages').add({
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
      <FlipMove className='app__messages'>
        {messages.map(({ id, message }) => (<Message key={id} messageID={id} username={username} message={message}/>))}
      </FlipMove>
      <span ref={dummy}></span>
    </main>

    <form >
      
      <input style={formInputStyles} placeholder='Type a message...' value={input} onChange={event => setInput(event.target.value)}/>
      
      <button className='app__iconButton' disabled={!input} type='submit' onClick={sendMessage}>Send Message</button>
      
    </form>    
  </div>)
}

export default ChatRoom
