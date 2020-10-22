import React, {useContext} from 'react';
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from './ThemeContext';

function Navbar({username}) {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);

  const headerStyles = {
    backgroundColor: isDarkMode ? '#fff': '#242526',
  };

  const titleStyles = {
    color: isDarkMode? 'black' : '#e4e6eb'
  }
  return (    
    <div className="app__header" style={headerStyles}>
      <h2 style={titleStyles}>Welcome {username}! </h2>
      <Switch onChange={setDarkMode}/>
    </div>    
  )
}

export default Navbar
