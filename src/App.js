import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Navbar from "./Navbar";

import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { ThemeProvider } from './ThemeContext';
import PageContent from './PageContent';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
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
    <ThemeProvider>
    <PageContent>
    <div className="App">
      <Navbar username={username}/>
      
      <FlipMove className='app__messages'>
        {
          messages.map(({ id, message }) => (
            <Message 
              key={id}
              messageID={id}
              username={username} 
              message={message}
            />          
          ))
        }
      </FlipMove>

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input 
            className='app__input'
            placeholder='Type a message...' 
            value={input} 
            onChange={event => setInput(event.target.value)}
          />
          <IconButton 
            className='app__iconButton'
            disabled={!input} 
            variant='contained' 
            color='primary' 
            type='submit' 
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>

        </FormControl>   
      </form>
     
      <div ref={dummy}></div>
      
    </div>
    </PageContent>
    </ThemeProvider>
  );
}

export default App;
