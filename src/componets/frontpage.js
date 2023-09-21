import React from "react";
// import '../css/frontpage.css';
import polygon from '../images/Polygon 1.svg'
import poly from '../images/Poly.svg'
import user from '../images/user.svg'
import briefcase from '../images/briefcase.svg'


const FrontPage = () => {






    return (
        <>
            <div className="container">
                <h4 className="side">Already have an account</h4>
                <div className="content">
                    <div className="head">
                        <h3>Join Us!</h3>
                        <p>To begin this journey, tell us what type of <br></br>account you’d be opening.</p>
                    </div>
                    <div className="index">
                        <h3>Individual</h3>
                        <img src={briefcase} className="logo"></img>
                        <img src={polygon} className="logo" alt="logo" />
                        <h5> Personal account to manage all you <br></br>activities.</h5>
                    </div>
                    <div className="index1">
                        <h3>Business</h3>
                        <img src={poly} className="logo1" alt="logo" />
                        <p>Own or belong to a company, this is for you.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FrontPage;