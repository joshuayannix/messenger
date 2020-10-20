import React, {useContext} from 'react';
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from './ThemeContext';

function Navbar({username}) {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);

  const styles = {
    backgroundColor: isDarkMode ? 'white': 'grey',
  };
  
  return (    
    <div className="app__header" style={styles}>
      <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100' alt='messeenger logo'/>
      <h2>Welcome {username}! You look great today</h2>
      <Switch onChange={setDarkMode}/>
    </div>    
  )
}

export default Navbar
