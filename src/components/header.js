import React from "react";
import Typed from "react-typed";

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
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default header
