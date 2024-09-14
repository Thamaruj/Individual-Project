import React, { useState } from 'react';
import './App.css';
import WelcomePage from './Pages/Welcome Page/Welcome Page';
import lightImage from '../public/light_mode_16dp_FFFFFF_FILL0_wght400_GRAD-25_opsz20.png'
import darkImage from '../public/dark_mode_16dp_FFFFFF_FILL0_wght400_GRAD-25_opsz20.png'

function App() {
  const [darkMode, setDarkMode] =useState(false); {/*dark mode is variable,where it's strating value is false. When we use setDarkMode it changes the dark mode value to true */}

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  
  return (
    <div className={darkMode? 'dark-mode' :'light-mode'}>   
    {/* We use ternery operator to assign the class based on darkmode state*/}
    {/*If darkMode is true, the result is 'dark-mode' AND If darkMode is false, the result is 'light-mode' */}

      <button onClick={toggleTheme} className="theme-toggle-button">
      {darkMode ? <img className='theme-image' src={lightImage} alt="" /> : <img className='theme-image' src={darkImage} alt="" /> }
      </button>

      <WelcomePage/>

    </div>
  );
}

export default App;
