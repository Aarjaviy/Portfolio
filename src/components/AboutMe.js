import React from "react";
import rgv from "../rgv.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className="profile-img" src={rgv} alt="Author..."/>
                </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About Me</h1>
                    <p>
                        I am Aarjaviy, Pre-final year student at IIT Roorkee. I am writing to you to express my interest in joining ImagoAI as an Intern. I am open to roles in the domain of Frontend and Backend Development. I think a growing startup like ImagoAI will give me a great opportunity to learn from a variety of people and also help me understand the key intricacies of Development.

                        Currently, I know HTML, CSS , JavaScript and have basic knowledge of React and Node.js. I also do competitive programming, thus have good problem solving skills. I also have knowledge in Data Structures and Algorithms.

                        In addition, I have learned how to work in a deadline-oriented environment through the multitude of experiences I gathered by taking part in several competitions and also being a part of a number of organisations on campus.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
