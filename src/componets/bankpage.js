import React, { useState } from "react";




const Bvn = () => {
    const [bvn, setBvn] = useState();
 

    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return(
        <>
        <div className="container2">
            <div className="headtext">
            <h1>back</h1>
        <h6>STEP 01/03</h6><h4>Bank Verification</h4>
        </div>
        <div className="header1">
            <p>Complete Your Profile!</p>
            <p>For the purpose of industery requalation, your<br></br>detail are requier</p>
            </div>
            <form className="registration-form" onSubmit={handleSubmit}>
        <label>
        Bank Verification number (BVN):
        </label>
        <input
          type="text"
          // name="username"
          // value={values.text}
          value={bvn}
            onChange={e => setBvn(e.target.value)}
          required
        />
        <button type="submit">Save & Continue</button>
</form>
        </div>
        
        </>
    )
}
export default Bvn;