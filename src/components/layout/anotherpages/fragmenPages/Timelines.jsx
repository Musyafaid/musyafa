import React from 'react';
import { Chrono } from 'react-chrono';

export default function Timelines() {
    const items = [
        {
            title: 'July 2022',
            cardTitle: 'Graduated from University',
            content: (
                <TimelineCard
                    subtitle="Computer Science"
                    description="Successfully graduated from XYZ University with a degree in Computer Science. Specialized in web development and AI."
                />
            ),
        },
        {
            title: 'July 2023',
            cardTitle: 'Joined ABC Company',
            content: (
                <TimelineCard
                    subtitle="Web Developer"
                    description="Started my professional career as a web developer at ABC Company. Worked on several projects including e-commerce websites and internal tools."
                />
            ),
        },
        {
            title: 'July 2024',
            cardTitle: 'Launched My Startup',
            content: (
                <TimelineCard
                    subtitle="Tech Entrepreneur"
                    description="Founded my own startup focused on building AI-driven applications. The company grew to 10 employees within the first year."
                />
            ),
        },
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-8 overflow-hidden">
            <Chrono 
                items={items}
                mode="VERTICAL"
                cardHeight={250}
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
                        <div className="text-white w-full">{item.content}</div>
                    </div>
                ))}
            </Chrono>
        </div> 
    );
}

const TimelineCard = ({ subtitle, description }) => (
    <div className="py-2 px-4 sm:px-6">
        <h4 className="text-sm sm:text-base text-gray-400 mb-2">{subtitle}</h4>
        <p className="text-sm sm:text-base text-gray-300 mb-4">{description}</p>
        <div className="border-t-2 border-slate-800 pt-4 w-full flex items-center">
            <img className="w-8 h-8 rounded-full mr-3"  src="/ms-1.png" alt="Avatar of Musyafa Achmad" />
            <div className="text-xs sm:text-sm">
                <p className="leading-none text-white">Musyafa Achmad S</p>
                <p className="text-gray-400">Aug 18</p>
            </div>
        </div>
    </div>
)