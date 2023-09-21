import React, { useState } from "react";




const Profile = () => {
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [country, setCountry] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return(
        <>
        <div className="container2">
            <div className="headtext">
            <h1>back</h1>
        <h6>STEP 01/03</h6><h4>Residence info</h4>
        </div>
        <div className="header1">
            <p>Complete Your Profile!</p>
            <p>For the purpose of industery requalation, your<br></br>detail are requier</p>
            </div>
            <form className="registration-form" onSubmit={handleSubmit}>
        <label>
        Phone number:
        </label>
        <input
          type="text"
          // name="username"
          // value={values.text}
          value={phone}
            onChange={e => setPhone(e.target.value)}
          required
        />
        <label>
        Your Address:
        </label>
        <input
          type="email"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />
         <label>
        password:
        </label>
        <input
          type="Country of Residence"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required
        />
        <button type="submit">Save & Continue</button>
</form>
        </div>
        
        </>
    )
}
export default Profile;