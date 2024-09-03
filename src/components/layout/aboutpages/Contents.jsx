import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutFragmen from './fragmenPages/AboutFragmen';
import SkilsFragment from './fragmenPages/SkilsFragment';
import Projects from './projectPages/Projects';

function About() {
  return (
    <>
     
      
          
          <div className="m-auto w-5/6  rounded-sm p-5 ">
            <AboutFragmen />
          </div>
         
      
        <div className='w-5/6 mb-36 px-2 mx-auto'>
        
          <div className='   mt-8'>
         
            <Projects />
          </div>
        </div>
    </>
  );
}

export default About;
