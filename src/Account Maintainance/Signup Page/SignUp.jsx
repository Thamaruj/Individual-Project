import React,{useState} from "react";
import { CountryDropdown } from "react-country-region-selector";
import { Link } from "react-router-dom";
import f1Logo from '../../Pages/Welcome Page/Welcome Page Images/f1_logo.svg';
import './SignUp.css'
;

function SignUp () {
    const [title, SetTitle]=useState('')
    const [firstName, SetFirstName]=useState ('');
    const [secondName, SetLastName]=useState('');
    const [birthday, SetBirthday]=useState('');
    const [country, SetCountry]=useState('');
    const [phoneNumber, SetPhoneNumber]=useState('');
    const [email, SetEmail]= useState('');
    const [password, SetPassword]=useState('');
    const [confirmPassword, SetConfirmPassword]=useState('');
    const [hasTypedConfirmPassword, setHasTypedConfirmPassword] = useState(false);

    const validatePassword = (password) => {
        const hasNumber = /\d/; // Checks for at least one number
        const hasLowercase = /[a-z]/; // Checks for at least one lowercase letter
        const hasUppercase = /[A-Z]/; // Checks for at least one uppercase letter

        return hasNumber.test(password) && hasLowercase.test(password) && hasUppercase.test(password);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();     {/* Prevent Page from Reloading*/}
        if(password!==confirmPassword){
            alert('Passwords do not match!');
            SetPassword('');
            SetConfirmPassword('');            
            return;
        }
        if(password.length<8 || password.length>30){
            alert('Invalid Length!');
            SetPassword('');
            SetConfirmPassword('');
            return;
        }
        if(!validatePassword(password)) {
            alert('Password must contain at least one number, one lowercase letter, and one uppercase letter.');
            SetPassword('');
            SetConfirmPassword('');
            return;
        }

        SetFirstName('');
        SetLastName('');
        SetBirthday('');
        SetCountry('');
        SetEmail('');
        SetPassword('');
        SetConfirmPassword('');
        alert('Your account has been created successfully! Please proceed to Log In')
    }

    return (
        <div className="container">

            <div className="f1-logo-container"><Link to="/home"><img className="f1-logo" src={f1Logo} alt="" /></Link></div>


                <div className="sign-up-form-container">

                <div className="login-and-signup-button">
                    <h1 className="signin-button">Sign Up</h1>
                    <h2 className="login-button"><Link to="/signin">Log In</Link> </h2>
                </div>

                <div className="sign-up-form">
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label>Title</label>
                                <select id="title" className="input-box" placeholder="Select" value={title} onChange={(e) => SetTitle(e.target.value)}>
                                    <option value="" disabled>Select Title</option> {/*We use this as place holder option */}
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>  
                                    <option value="Ms">Ms</option>
                                </select>

                        </div>
                        <div>
                            <label>First Name</label>
                            <input className="input-box" type="text" value={firstName} placeholder="First Name" onChange={(e) => SetFirstName(e.target.value)} required />
                        </div>

                        <div>
                            <label>Last Name</label>
                            <input className="input-box" type="text" value={secondName} placeholder="Second Name" onChange={(e)=>SetLastName(e.target.value)} required />
                        </div>

                        <div>
                            <label>Date Of Birth</label>
                            <input className="input-box" type="date" value={birthday} placeholder="MM/DD/YYYY" onChange={(e)=>SetBirthday(e.target.value)} required/>
                        </div>

                        {/*Left behind for the phone number and country code */}

                        {/* <div>
                            <label></label>
                            <input type="text" /> 
                        </div> */}

                        <div>
                            <label>Country</label>
                                <CountryDropdown
                                    className='input-box'
                                    value={country}
                                    onChange={(val) => SetCountry(val)}
                                    required
                                />
                        </div>

                        <div>
                            <label> Email Address</label>
                            <input className="input-box" type="email" value={email} placeholder="example@email.com" onChange={(e) =>SetEmail(e.target.value)} required />
                        </div>

                        <div>
                            <label>Enter Password</label>
                            <input className="input-box" type="password" value={password} placeholder="********" onChange={(e)=> SetPassword(e.target.value)} required/>
                        </div>

                        <div>
                            <label>Confirm Password</label>
                            <input className="input-box" type="password" value={confirmPassword} placeholder="********" onChange={(e)=> {SetConfirmPassword(e.target.value);setHasTypedConfirmPassword(true);}} required/>
                            <span>* password must contain 8-30 Characters, Number, Lowercase, and Uppercase</span>
                        </div>

                            {hasTypedConfirmPassword && confirmPassword && (password !== confirmPassword) && (
                                <p style={{ color: 'red', fontSize: '14px' }}>Passwords do not match!</p>
                            )}

                        <div>
                            <p>By clicking on register, I agree that I have read and agree to the Terms and Conditions and Privacy Policy</p>
                        </div>

                        <div>
                            <button className="register-button" type="submit">Register</button>
                            <div className="back-to-home-button"><Link to="/mainpage">Back to home</Link> </div>
                        </div>

                    </form>
                </div>
            </div>
            
            <div className='partners-sign-up'>
                <img className='f1WhiteLogo' src={f1Logo} alt="" />
                <p>Formula One World Championship Limited (2003-2024)</p>
            </div>

        </div>
    )

}

export default SignUp;