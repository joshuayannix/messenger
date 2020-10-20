import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

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