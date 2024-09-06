import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const BgParticles = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);


    return (

        <div  >

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                width="100vw"
                height="100%"
                options={{
                    background: {
                        color: {
                            value: "#020617",
                        },
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    style: {
                        position: "absolute",
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 2,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.5,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#D8325A", // Menggunakan fungsi getRandomColor
                        },
                        links: {
                            color: "#D8325A",
                            distance: 150,
                            enable: true,
                            opacity: 1,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />



        </div>
    );
};

export default BgParticles;
