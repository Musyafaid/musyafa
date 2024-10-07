import React from 'react';
import AboutFragmen from './fragmenPages/AboutFragmen';
import SkilsFragment from './fragmenPages/SkilsFragment';
import Projects from './projectPages/Projects';
import Contact from './contactSection/Contact';
import Timelines from './fragmenPages/Timelines';

function About() {
  return (
    <>
     
      
          
          <div className="m-auto  rounded-sm px-5 ">
            <SkilsFragment />
            <AboutFragmen />
             <Timelines />
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
