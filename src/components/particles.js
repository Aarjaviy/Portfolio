import React from "react";
import Particles from "react-particles-js";

const particles = () => {
    return (
        <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "black"
              }
            }
          }
        }}
      />
    )
}

export default particles
