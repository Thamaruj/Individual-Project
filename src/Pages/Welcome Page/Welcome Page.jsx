import React from 'react';
import './Welcome Page.css';
import f1Logo from '../Welcome Page/Welcome Page Images/f1_logo.svg'
import f1RedLogo from '../Welcome Page/Welcome Page Images/F1_red.png'


const WelcomePage = () => {

    return (
        <nav className="WelcomePage">
            <div className='note'>Welcome To The Ultimate Racing Spectacle</div>
            <div><img className='f1logo' src={f1RedLogo} alt="" /></div>
            <div className='clickButtons'>
                <div className='signInButton'>Log In</div>
                <div className='signUpButton' >Sign up</div>
            </div>
            <div className='partners'>
                <img className='f1WhiteLogo' src={f1Logo} alt="" />
                <p>Formula One World Championship Limited (2003-2024)</p>
            </div>
        </nav>
    );
};

export default WelcomePage;
