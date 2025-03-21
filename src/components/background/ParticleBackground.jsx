import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Initialize the tsParticles instance here
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // You can perform additional operations once particles are loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: -1,
      }}
      options={{
        background: {
          color: "#152b61", // Dark background color
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 25,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // White particles
          },
          shape: {
            type: "circle", // Particles will be circles
            stroke: {
              width: 0,
              color: "#000000", // No border
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg", // Image for particles (optional)
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5, // Particle opacity
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3, // Particle size
            random: true, // Random particle sizes
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150, // Distance between lines
            color: "#ffffff", // White line color
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3, // Speed of particle movement
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out", // Particles will go out of the screen
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false, // Hover event disabled
              mode: "repulse",
            },
            onclick: {
              enable: false, // Click event disabled
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleBackground;
