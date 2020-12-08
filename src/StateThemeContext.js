import React, { createContext, useState, useReducer } from 'react';

// create the data layer
export const ThemeContext = createContext();

// build a provider
export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useState(true);

  const setDarkMode = () => toggleTheme(!isDarkMode)

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, setDarkMode }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

// create another data layer
export const StateContext = createContext()

// build a state provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider 
    value={useReducer(reducer, initialState)}
  >
    {children}
  </StateContext.Provider>
)
