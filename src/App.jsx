import React, { useState } from 'react';
import './App.css';
import WelcomePage from './Pages/Welcome Page/Welcome Page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import lightImage from '../public/light_mode_16dp_FFFFFF_FILL0_wght400_GRAD-25_opsz20.png';
import darkImage from '../public/dark_mode_16dp_FFFFFF_FILL0_wght400_GRAD-25_opsz20.png';
import SignUp from './Account Maintainance/SignUp page/Signup';
import LogIn from './Account Maintainance/Login Page/Login';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {darkMode ? <img className='theme-image' src={lightImage} alt="" /> : <img className='theme-image' src={darkImage} alt="" />}
        </button>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
