import React, {useContext} from 'react';
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from './ThemeContext';
import logo from './jlogo.png'
import { auth } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Navbar() {
  const user = useSelector(selectUser)

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
      <img onClick={() => auth.signOut()}src={logo} alt="logo" width='40px'/>
      <h2 style={titleStyles}>Welcome {user.displayName}</h2>      
      <img src={user.photo} alt=""/>
      <Switch onChange={setDarkMode}/>
    </div>    
  )
}

export default Navbar
