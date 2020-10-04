import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([

   ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [] );

  const sendMessage = event => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  };

  return (
    <div className="App">
      <h1>hello josh</h1>
      <h2>Welcome {username}! You look great today!</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button 
            disabled={!input} 
            variant='contained' 
            color='primary' 
            type='submit' 
            onClick={sendMessage}>Send message
          </Button>
        </FormControl>   
      </form>

      <FlipMove>
        {
          messages.map(message => (
            <Message 
              username={username} 
              message={message}
            />          
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
