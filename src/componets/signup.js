import React, { useState } from "react";
import signup from '../css/signup.css'
import Union from '../images/Union.svg'
import Vector1 from '../images/Vector1.svg'


const SignUp = () => {
    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [checkbox, setCheckbox] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return(
        <><div className="signupcontent">
          <div className="main">
            <div className="content">
                <div className="img">
            <img src={Union} className="lo" alt="log"></img>
            
            <h1 className="lo">Oasis.</h1>
            </div>
            <p>“ <br></br>The passage experienced a surge in popularity 
            during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s 
                as desktop publishers bundled the text with their software.<br></br>Vincent Obi <img src={Vector1} className="log2" alt="logs"></img></p>
            </div>
        </div>
        <h5 className="head">Back</h5>
        <h6 className="p2">STEP 01/03</h6><h4 className="p">Personal info</h4>
        <div className="container2">
            <div className="head">
            
        </div>
        <div className="header1">
            <h1>Register Individual Account</h1>
            <p>For the purpose of industery requalation, your<br></br>detail are requier</p>
            </div>
            <form className="registration-form" onSubmit={handleSubmit}>
        <label>
        Your fullname*
        </label><br></br>
        <input
          type="text"
          // name="username"
          // value={values.text}
          value={fullname}
            onChange={e => setFullname(e.target.value)}
          required
        /><br></br>
        <label>
        Email address*
        </label><br></br>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br></br>
         <label>
         Create password*
        </label><br></br>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br></br>
        <input
          type="checkbox"
          value={checkbox}
          onChange={e => setCheckbox(e.target.value)}
          required
        />
        <label>
        I agree to terms and condition
        </label><br></br>
        <button type='submit'>Register Account</button><br></br>
        <span>or</span><br></br>
        <button type='button' className="google">Register with Google</button><br></br>
</form>
        </div>
        </div>
        </>
    )
}
export default SignUp;