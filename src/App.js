import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([ 'hey is this available', 'no it is not', 'positive messages only']);

  console.log(input);
  console.log(messages);

  const sendMessage = event => {
    // all logic to send a message
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>hello josh</h1>

      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={sendMessage}>Send message</button>
      
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
      
    </div>
  );
}

export default App;
