import React, {useEffect, useState} from 'react';

import './style.scss';

const DarkModeToggle = () => {
  
    const {darkMode, setDarkMode} = useState('')



    if(JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
      document.body.classList.add('dark-mode');
    }

  
    
  

  useEffect(() => {

     
  }, [])

  const handleTheme = () => {
    if(!this.state.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      
      setDarkMode({darkMode: (!darkMode)})
      localStorage.setItem('DARK_MODE', !darkMode)
  }
 


  render() {
    return (
      <button onClick={handleTheme}>Change Mode</button>
    );
  }
}

export default DarkModeToggle;