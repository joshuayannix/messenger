import React, { createContext, useState } from 'react';

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
