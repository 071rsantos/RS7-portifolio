import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const VSCodeParticle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#007acc", "#1e1e1e", "#dcdcdc"], // Cores do VSCode
          },
          shape: {
            type: "char",
            character: {
              value: ["<", ">", "/", "{", "}", "(", ")", "HTML", "CSS", "JS", "PHP", "ReactJS"],
              font: "monospace",
              style: "",
              weight: "400",
              fill: true,
            },
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: 16,
            random: true,
          },
          move: {
            enable: true,
            speed: 10, // Velocidade aumentada
            direction: "bottom", // Direção para baixo
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(135deg, #1e1e1e, #007acc)', // Fundo degradê do VSCode
      }}
    />
  );
};

export default VSCodeParticle;
