import React from 'react';
import { Link } from 'react-router-dom';
import './Nav bar.css'

const Navbar = ({ darkMode, toggleTheme, lightImage, darkImage }) => {
  return (
    <nav className="navbar">

        <ul>
            <li className='button-navigator-in-navbar'><Link to="/signup">Sign Up</Link></li>
            <li className='button-navigator-in-navbar'><Link to="/signin">Sign In</Link></li>
            <li className='button-navigator-in-navbar'><Link to="/home">Home</Link></li>
            <li className='button-navigator-in-navbar'>Latest</li>
            <li className='button-navigator-in-navbar'>Schedule</li>
            <li className='button-navigator-in-navbar'>Results</li>
            <li className='button-navigator-in-navbar'>Drivers</li>
            <li className='button-navigator-in-navbar'>Teams</li>
            <li className='button-navigator-in-navbar'>Live Timing</li>
            <li className='button-navigator-in-navbar'> Tickets</li>    
        </ul>

        

    




      
      
      {/* Dark mode toggle in the navbar */}
      <button onClick={toggleTheme} className="theme-toggle-button">
        {darkMode ? <img className='theme-image' src={lightImage} alt="Light Mode" /> : <img className='theme-image' src={darkImage} alt="Dark Mode" />}
      </button>
    </nav>
  );
};

export default Navbar;
