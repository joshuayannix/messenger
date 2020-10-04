import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'Josh', text: 'hey whats up'},
    {username: 'George', text: 'nothing much, you?'}
   ]);
  const [username, setUsername] = useState('');

  //useState = just a way to set a variable in react
  //useEffect = code that runs based on a condition. Runs when the component loads

  useEffect(() => {
    //setUsername(prompt('Please enter your name'));
  }, [] )
  const sendMessage = event => {
    // all logic to send a message
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
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
      {
        messages.map(message => (
          <Message 
            username={message.username} 
            text={message.text}
          />          
        ))
      }
    </div>
  );
}

export default App;
