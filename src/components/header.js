import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Web Development and websites promotion</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design","Web Development","Machine Learning","Deep Learning"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} duration={100} to="contact" offset={-110} className="btn-main-offer" href="#">Contact</Link>
            </div>
        </div>
    )
}

export default header
