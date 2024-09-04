import { TypeAnimation } from "react-type-animation";

export default function TypingIntro() {
    return (
        <div
            style={{ height: "50%" }}
            className="w-full  mb-1  flex flex-col items-start relative">

            <div className=" flex items-center max-md:h-auto  max-md:w-screen  w-full h-2/4">
                <TypeAnimation

                    sequence={[
                        '',
                        500,
                        'Hi, I am Musyafa Achmad Saputra',
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{
                        fontSize: '8vmin',
                        lineHeight: '1',
                        fontWeight: '1000',
                        display: 'inline-block',
                        overflow : 'hidden'
                    }}
                    repeat={0} // Repeat indefinitely
                />
            </div>

            <div className=" flex items-center  w-full h-1/4 max">
                <TypeAnimation
                    // Adjusted top value to prevent overlap
                    sequence={[
                        '',
                        2500, // Adjusted to start after the first animation ends
                        'Junior Web Developer',
                        2000, // Delay of 2 seconds
                        '',
                        0,
                    ]}
                    wrapper="span"
                    speed={23}
                    cursor={false}
                    style={{
                        fontSize: '5vmin ',
                        display: 'inline-block',
                        overflow:'hidden'
                       
                    }}
                    repeat={Infinity} // Repeat indefinitely
                />
            </div>

            <div className=" flex  items-center  w-full h-1/6">
                <a
                    className="max-md:text-xs w-36 h-full max-sm:w-24 max-md:h-full bg-rose-700 rounded-md hover:bg-rose-800 flex items-center justify-center"
                    href="#aboutpages"
                >
                    Hire Me....🚀🤖
                </a>
            </div>


        </div>
    );
}
