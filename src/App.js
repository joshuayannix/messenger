import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./Navbar";
import ChatRoom from './ChatRoom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  // useEffect(() => {
  //   setUsername(prompt('Please enter your name'));
  // }, [] );

  return (
    <Router>
      <div className="App">
        <Navbar username={username}/>
        <section>
          <ChatRoom username={username}/>
        </section>   
      </div>  
    </Router>   
  );
}

export default App;
