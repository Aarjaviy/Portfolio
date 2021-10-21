import React from 'react';
import netflix from "../images/netflix.png";
import cityguide from "../images/city-guide-app.png";
import mernblog from "../images/mern-blog.png";
import portfo from "../images/portfolio.png";
import taskmanager from "../images/task-manager.png";
/****FONTAWESOME IMPORTS */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const portfolio = () => {

    //NETFLIX
    const openPopupboxNetflix = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project....." />
                <p>Hey this is link to a Netflix Clone Project</p>
                <b>Link:</b><a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=XtMThy8QKqU")}>https://www.youtube.com/watch?v=XtMThy8QKqU</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix Clone Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //CITY GUIDE
    const openPopupboxCityGuide = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={cityguide} alt="City Guide Project....." />
                <p>Hey this is link to a City Guide Project</p>
                <b>Link:</b><a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=HfJjzmSaLuQ", "_blank")}>https://www.youtube.com/watch?v=HfJjzmSaLuQ</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: "City Guide Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //MERN BLOG
    const openPopupboxMernBlog = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={mernblog} alt="Mern Blog Project....." />
                <p>Hey this is link to a Mern Blog Project</p>
                <b>Link:</b><a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=Ay00797764M&list=PL5BFcXE899zyuoJpzOlmFWiLd8DGpiTnG", "_blank")}>https://www.youtube.com/watch?v=Ay00797764M&list=PL5BFcXE899zyuoJpzOlmFWiLd8DGpiTnG</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigMernBlog = {
        titleBar: {
            enable: true,
            text: "Mern Blog Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Portfolio
    const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={portfo} alt="Portfolio Project....." />
                <p>Hey this is link to a Portfolio Project</p>
                <b>Link:</b><a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=vD72tRK8mC4", "_blank")}>https://www.youtube.com/watch?v=vD72tRK8mC4</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "Portfolio Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Task Manager
    const openPopupboxTaskManager = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={taskmanager} alt="Task Manager Project....." />
                <p>Hey this is link to a Task Manager Project</p>
                <b>Link:</b><a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=DvGk57CSAFM", "_blank")}>https://www.youtube.com/watch?v=DvGk57CSAFM</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigTaskManager = {
        titleBar: {
            enable: true,
            text: "Task Manager Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                            <img className="portfolio-image" src={netflix} alt="Netflix clone project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                            <img className="portfolio-image" src={cityguide} alt="City Guide project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div></div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="portfolio-image-box" onClick={openPopupboxMernBlog}>
                            <img className="portfolio-image" src={mernblog} alt="Mern Blog project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div></div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                            <img className="portfolio-image" src={portfo} alt="Portfolio project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div></div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                            <img className="portfolio-image" src={taskmanager} alt="Task Manager project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div></div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigCityGuide} />
            <PopupboxContainer {...popupboxConfigMernBlog} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
            <PopupboxContainer {...popupboxConfigTaskManager} />
        </div>
    )
}

export default portfolio
