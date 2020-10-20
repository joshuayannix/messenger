import React, { useContext} from 'react';
import { ThemeContext } from './ThemeContext';

export function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  
  const styles ={
    backgroundColor: isDarkMode ? '#fff' : '#1c1e21',

  }
  
  return (
    <div style={styles}>
      {props.children}
    </div>
  )  
}

export default PageContent
