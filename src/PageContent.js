import React, { useContext} from 'react';
import { ThemeContext } from './ThemeContext';

export function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  
  const styles ={
    backgroundColor: isDarkMode ? 'yellow' : 'grey',
    height: '100vh',
    width: '100vw'
  }
  
  return (
    <div style={styles}>
      {props.children}
    </div>
  )  
}

export default PageContent
