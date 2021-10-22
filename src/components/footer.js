import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
} from "react-share";
import {Link} from "react-scroll";

const footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Hazaribagh, Jharkhand | Roorkee, Uttarakhand</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:8290983736">+91-8290983736</a>
                        </div>
                        <div className="d-flex">
                            <p>aarjaviy@gmail.com | aarjaviy@me.iitr.ac.in</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} duration={100} to="home" className="footer-nav" href="#">Home</Link>
                                <br />
                                <Link smooth={true} duration={100} to="about" offset={-110} className="footer-nav" href="#">About Me</Link>
                                <br />
                                <Link smooth={true} duration={100} to="services" offset={-110} className="footer-nav" href="#">Services</Link>
                            </div>
                            <div className="col">
                            <Link smooth={true} duration={100} to="experience" offset={-110} className="footer-nav" href="#">Experience</Link>
                                <br />
                                <Link smooth={true} duration={100} to="portfolio" offset={-110} className="footer-nav" href="#">Portfolio</Link>
                                <br />
                                <Link smooth={true} duration={100} to="contact" offset={-110} className="footer-nav" href="#">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.facebook.com/hellruler.aarjaviy"}
                                quote={"Great Profile"}
                                hashtag={"#Machaxx"}
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.facebook.com/hellruler.aarjaviy"}
                                quote={"Great Profile"}
                                hashtag={"#Machaxx"}
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={"https://www.facebook.com/hellruler.aarjaviy"}
                                quote={"Great Profile"}
                                hashtag={"#Machaxx"}
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            <RedditShareButton
                                url={"https://www.facebook.com/hellruler.aarjaviy"}
                                quote={"Great Profile"}
                                hashtag={"#Machaxx"}
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default footer
