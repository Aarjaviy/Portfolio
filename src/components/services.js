import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFacebookf, faFileCode, faGoogle, faLaptop, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">my services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon"icon={faDesktop} size="2x" /></div>
                            <h3>Web Design</h3>
                            <p>I know Web Design</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon"icon={faFileCode} size="2x" /></div>
                            <h3>Web Development</h3>
                            <p>I know Web Design</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon"icon={faLaptop} size="2x" /></div>
                            <h3>Machine Learning</h3>
                            <p>I know Web Design</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon"icon={faLaptopCode} size="2x" /></div>
                            <h3>Deep Learning</h3>
                            <p>I know Web Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default services
