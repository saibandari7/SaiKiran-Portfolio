import React from "react";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
      <Particles
        options={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: false, // Lines will not be drawn between particles
              opacity: 0.03,
            },
            move: {
              direction: "none", // Set the particles to move freely
              speed: 0.5, // Speed of particles' movement
              random: true, // Random movement direction
              straight: false, // Allow particles to move in different directions
            },
            size: {
              value: 3, // Increase particle size for more visibility
            },
            opacity: {
              anim: {
                enable: true,
                speed: 2, // Speed of opacity change
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse", // Particles will move away when you hover
              },
              onclick: {
                enable: true,
                mode: "push", // Push more particles when clicked
              },
            },
            modes: {
              repulse: {
                distance: 100, // Distance particles will move away when hovered
                duration: 0.4, // Duration of the repulsion effect
              },
              push: {
                particles_nb: 1, // Number of particles to add when clicked
              },
            },
          },
          retina_detect: true, // Ensure the particles scale correctly on high-resolution displays
        }}
      />
    </div>
  );
};

export default ParticleBackground;
