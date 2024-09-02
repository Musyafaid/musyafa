import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypingIntro from "./common/TypingIntro";
import "./Intro.css";

const IntroPages = () => {
    useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 1000,
            easing: "ease-in-out",
            delay: 100,
        });

        AOS.refresh();
    }, []);

    return (
        <div className="w-screen h-screen flex items-center justify-between pt-10">
            <div
                data-aos="fade-right"
                data-aos-offset="50%" // Set offset ke 50%
                className="w-3/5 ml-14 
                max-md:absolute max-md:left-0 max-md:top-20
                max-md:h-1/3
                h-3/4 opacity-100 flex items-center"
                style={{ zIndex: 2 }}
            >
                <TypingIntro />
            </div>
            <div
                data-aos="fade-left"
                data-aos-offset="50%" // Set offset ke 50%
                className="w-2/5 h-3/4 
                max-md:w-2/3
                max-md:h-1/3
                max-md:absolute max-md:right-0 max-md:top-80 opacity-100 flex justify-center items-center pr-9"
                style={{ zIndex: 2 }}
            >
                <img

                    className="
                  
                    border-anim border-solid border-4 bg-transparent mr-10"
                    src="/ms-1.png"
                    alt=""
                />
            </div>



        </div>
    );
};

export default IntroPages;
