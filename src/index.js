import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, StateProvider } from './StateThemeContext';
import reducer, { initialState } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider
      initialState={initialState}
      reducer={reducer}
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StateProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);


