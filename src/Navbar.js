import React, {useContext} from 'react';
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from './ThemeContext';
import logo from './messenger_logo.png'
import { auth } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Avatar } from '@material-ui/core';

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
      <img src={logo} alt="logo" width='40px'/>
      <div className="userDetails" onClick={() => auth.signOut()} >
        <Avatar           
          src={user.photo} 
          className='navbarAvatar'
        /> 
        <h4 style={titleStyles}>
          {user.displayName}
        </h4>  
      </div>
          
      <Switch onChange={setDarkMode}/>
    </div>    
  )
}

export default Navbar
