import React, {useContext} from 'react';
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from './ThemeContext';
import logo from './jlogo.png'

function Navbar({username}) {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);

  const headerStyles = {
    backgroundColor: isDarkMode ? '#fff': '#242526',
    border: isDarkMode ? '2px solid #e9e9eb' : '2px solid #3E4042' 
  };

  const titleStyles = {
    color: isDarkMode? 'black' : '#e4e6eb'
  }
  return (    
    <div className="app__header" style={headerStyles}>
      <img src={logo} alt="logo" width='40px'/>
      <h2 style={titleStyles}>Welcome {username}! </h2>
      <Switch onChange={setDarkMode}/>
    </div>    
  )
}

export default Navbar
