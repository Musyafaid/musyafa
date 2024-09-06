import React from 'react';
import { Chrono } from 'react-chrono';
import './sty.css'


export default function Timelines() {
    const items = [
        {
            title: 'July 2022',
            cardTitle:'Graduated from University',
            content: (
                <div>
                    
                    <h4 className="text-sm text-gray-400">Computer Science</h4>
                    <p className="text-gray-300">Successfully graduated from XYZ University with a degree in Computer Science. Specialized in web development and AI.</p>
                    <div className="border-t-2 border-slate-800 py-2 w-full flex items-center">
                        <img className="w-7 h-7 rounded-full mr-4" src="/ms-1.png" alt="Avatar of Musyafa Achmad" />
                        <div className="text-xs">
                            <p className="leading-none text-white">Musyafa Achmad S</p>
                            <p className="text-gray-400">Aug 18</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'July 2023',
            cardTitle:'Joined ABC Company',

            content: (
                <div>
                  
                    <h4 className="text-sm text-gray-400">Web Developer</h4>
                    <p className="text-gray-300">Started my professional career as a web developer at ABC Company. Worked on several projects including e-commerce websites and internal tools.</p>
                    <div className="border-t-2 border-slate-800 py-2 w-full flex items-center">
                        <img className="w-7 h-7 rounded-full mr-4" src="/ms-1.png" alt="Avatar of Musyafa Achmad" />
                        <div className="text-xs">
                            <p className="leading-none text-white">Musyafa Achmad S</p>
                            <p className="text-gray-400">Aug 18</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'July 2024',
            cardTitle:'Launched My Startup',
            
            content: (
                <div className="h-full">
                    <h4 className=" text-gray-400">Tech Entrepreneur</h4>
                    <p className=" text-gray-300">Founded my own startup focused on building AI-driven applications. The company grew to 10 employees within the first year.</p>
                    <div className="border-t-2 border-slate-800 py-2 w-full flex items-center">
                        <img className="w-7 h-7 rounded-full mr-4" src="/ms-1.png" alt="Avatar of Musyafa Achmad" />
                        <div className="text-xs">
                            <p className="leading-none text-white">Musyafa Achmad S</p>
                            <p className="text-gray-400">Aug 18</p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div>
            <Chrono
                items={items}
                mode="VERTICAL"
                cardHeight={225} // Optional: adjust card height if needed
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
                    toolbarBgColor: '#091133',
                    
                }}
            >
                {items.map((item, index) => (
                    <div key={index} className="h-full">
                        <div className="text-white">{item.content}</div>
                    </div>
                ))}
            </Chrono>
        </div>
    );
}
