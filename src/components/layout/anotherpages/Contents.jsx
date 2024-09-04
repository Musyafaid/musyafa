import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutFragmen from './fragmenPages/AboutFragmen';
import SkilsFragment from './fragmenPages/SkilsFragment';
import Projects from './projectPages/Projects';
import Contact from './contactSection/Contact';

function About() {
  return (
    <>
     
      
          
          <div className="m-auto w-5/6  rounded-sm px-5 ">
            <SkilsFragment />
            <AboutFragmen />
          </div>
         
      
        <div className='w-5/6  px-2 mx-auto'>
        
          <div className='mt-8 pb-5'>
         
            <Projects />
          </div>
        </div>
          <div className="m-auto w-5/6  rounded-sm p-5 ">
            <Contact />
          </div>
    </>
  );
}

export default About;
