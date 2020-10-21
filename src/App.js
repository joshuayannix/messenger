import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import { ThemeProvider } from './ThemeContext';
import ChatRoom from './ChatRoom';

function App() {
  
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <section>
          <ChatRoom />
        </section>   

      </div>     
    </ThemeProvider>
  );
}

export default App;
