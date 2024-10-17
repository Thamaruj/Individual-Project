import React, { useState } from 'react';
import './App.css';
import WelcomePage from './Pages/Welcome Page/Welcome Page';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'; // Import Navigate
import lightImage from '../public/light_mode_16dp_FFFFFF_FILL0_wght400_GRAD-25_opsz20.png';
import darkImage from '../public/dark_mode_16dp_FFFFFF_FILL0_wght400_GRAD-25_opsz20.png';
import LogIn from './Account Maintainance/LogIn Page/LogIn';
import MainPage from './Pages/Main Page/Main page';
import Navbar from './Common Components/Nav bar/Nav bar';
import Sponsers from './Common Components/Sponsers Details/Sponser';
import WhatIsF1 from './Pages/What is f1/what is f1';
import ScrollUp from './Common Components/ScrollUp';
import SignUp from './Account Maintainance/Signup Page/SignUp';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const location = useLocation(); // Determines current route

  const notInLocation = ['/home', '/signup', '/signin'];

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {/* Show Navbar only if not on Welcome Page */}
      {!notInLocation.includes(location.pathname) && (
        <Navbar
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          lightImage={lightImage}
          darkImage={darkImage}
        />
      )}

      <Routes>
        {/* Redirect from root (/) to /mainpage */}
        <Route path="/Individual-Project/" element={<Navigate to="/mainpage" />} />

        {/* Other routes */}
        <Route path="/home" element={
          <>
            {/* Dark mode toggle only on Welcome Page */}
            <button onClick={toggleTheme} className="theme-toggle-button">
              {darkMode ? <img className='theme-image' src={lightImage} alt="Light Mode" /> : <img className='theme-image' src={darkImage} alt="Dark Mode" />}
            </button>
            <WelcomePage />
          </>
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<LogIn />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path='/whatIsf1' element={<WhatIsF1/>}/>
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <ScrollUp/>
      <App />
    </Router>
  );
}
