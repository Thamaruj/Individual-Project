import React from 'react';
import { Link } from 'react-router-dom';
import './Nav bar.css'
import f1_logo_white from '../Nav bar/f1_logowhite.png'
import loginLogo from '../Nav bar/account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'

const Navbar = ({  toggleTheme }) => {
  return (
    <nav className="navbar">

        <div><img className='f1-white-logo' src={f1_logo_white} alt="" /></div>

        <div>
          <ul>
              
              <li className='button-navigator-in-navbar'>Schedule</li>
              <li className='button-navigator-in-navbar'>Results</li>
              <li className='button-navigator-in-navbar'>Drivers</li>
              <li className='button-navigator-in-navbar'>Teams</li>
              <li className='button-navigator-in-navbar'> Tickets</li>    
              <li className='button-navigator-in-navbar' onClick={toggleTheme}> Theme</li>
              <li className='button-navigator-in-navbar'><Link to="/home"><img src={loginLogo} alt="" /></Link></li>
          </ul>
        </div>

        

    




    
    </nav>
  );
};

export default Navbar;
