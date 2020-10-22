import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./Navbar";
import { ThemeProvider } from './ThemeContext';
import ChatRoom from './ChatRoom';

function App() {
  const [username, setUsername] = useState('');
  // useEffect(() => {
  //   setUsername(prompt('Please enter your name'));
  // }, [] );

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar username={username}/>
        <section>
          <ChatRoom username={username}/>
        </section>   

      </div>     
    </ThemeProvider>
  );
}

export default App;
