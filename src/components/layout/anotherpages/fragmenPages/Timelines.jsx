import React from 'react';
import { Chrono } from 'react-chrono';
import './sty.css';

export default function Timelines() {
    const items = [
        {
            title: 'July 2022',
            cardTitle: 'Graduated from University',
            content: (
                <div className="py-0 px-5 ">
                    <h4 className="text-xs sm:text-sm md:text-base text-gray-400">Computer Science</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">
                        Successfully graduated from XYZ University with a degree in Computer Science. Specialized in web development and AI.
                    </p>
                    <div className="border-t-2 border-slate-800 py-2 w-full flex items-center">
                        <img className="w-8 h-8 rounded-full mr-3" src="/ms-1.png" alt="Avatar of Musyafa Achmad" />
                        <div className="text-xs sm:text-sm">
                            <p className="leading-none text-white">Musyafa Achmad S</p>
                            <p className="text-gray-400">Aug 18</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'July 2023',
            cardTitle: 'Joined ABC Company',
            content: (
                <div className="py-0 px-5 flex flex-col items-start ">
                    <h4 className="text-xs sm:text-sm md:text-base text-gray-400">Web Developer</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">
                        Started my professional career as a web developer at ABC Company. Worked on several projects including e-commerce websites and internal tools.
                    </p>
                    <div className="border-t-2 border-slate-800 py-2 w-full flex items-center">
                        <img className="w-8 h-8 rounded-full mr-3" src="/ms-1.png" alt="Avatar of Musyafa Achmad" />
                        <div className="text-xs sm:text-sm">
                            <p className="leading-none text-white">Musyafa Achmad S</p>
                            <p className="text-gray-400">Aug 18</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'July 2024',
            cardTitle: 'Launched My Startup',
            content: (
                <div className="py-0 px-5 ">
                    <h4 className="text-xs sm:text-sm md:text-base text-gray-400">Tech Entrepreneur</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">
                        Founded my own startup focused on building AI-driven applications. The company grew to 10 employees within the first year.
                    </p>
                    <div className="border-t-2 border-slate-800 py-2 w-full flex items-center">
                        <img className="w-8 h-8 rounded-full mr-3" src="/ms-1.png" alt="Avatar of Musyafa Achmad" />
                        <div className="text-xs sm:text-sm">
                            <p className="leading-none text-white">Musyafa Achmad S</p>
                            <p className="text-gray-400">Aug 18</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="px-2 sm:px-4 lg:px-6 overflow-hidden">
            <Chrono 
                items={items}
                mode="VERTICAL"
                cardHeight={220} // Make the card height responsive
                cardWidth="100%"
                theme={{
                    primary: '#e11d48',
                    secondary: '#1c264f',
                    cardBgColor: '#091133',
                    titleColor: '#d8d8d8',
                    titleColorActive: '#d8d8d8',
                    cardTitleColor: '#d8d8d8',
                    cardSubtitleColor: '#d8d8d8',
                    cardDetailsColor: '#d8d8d8',
                    toolbarBtnBgColor: '#091133',
                    toolbarBtnTextColor: '#353670',
                    toolbarBgColor: '#020617',
                }}
            >
                {items.map((item, index) => (
                    <div key={index} className="h-full flex items-center">
                        <div className="text-white">{item.content}</div>
                    </div>
                ))}
            </Chrono>
        </div> 
    );
}
