import { Link } from "react-router-dom";
import f1Logo from '../../Pages/Welcome Page/Welcome Page Images/f1_logo.svg';
import './LogIn.css'

function LogIn (){

    return(
        <div className="container-log-in-form">
            
            <div className="f1-logo-container"><Link to="/"><img className="f1-logo" src={f1Logo} alt="" /></Link></div>

            <div className="log-in-form">
            
                <div className="login-and-signup-button">
                    <h2 className="signup-button-in-login-page"><Link to="/signup">Sign Up</Link></h2>
                    <h1 className="login-button-in-login-page">Log In </h1>
                </div>

                <label>Username</label>
                <input className="input-box" type="email" placeholder="Enter Your Email" />

                <label>Password</label>
                <input className="input-box" type="password" name="" id="" placeholder="Enter Your Password" />

                <div className="login-proceed-button">Log In</div>

            </div>

                <div className='partners-sign-in'>
                    <img className='f1WhiteLogo' src={f1Logo} alt="" />
                    <p>Formula One World Championship Limited (2003-2024)</p>
                </div>
        </div>
    )
}
export default LogIn;