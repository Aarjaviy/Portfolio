import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const testimonials = () => {
    return (
        <div id="testimonials" className="testimonials">
            <h1>My Friends</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel/>
                </div>
            </div>
        </div>
    )
}

export default testimonials
