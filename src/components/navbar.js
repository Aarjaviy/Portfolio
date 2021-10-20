import React from "react";
import logo from "../logo.jpg";
import {Link} from "react-scroll";
// REACT FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="about" offset={-110} className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="services" offset={-110} className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="experience" offset={-110} className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar
