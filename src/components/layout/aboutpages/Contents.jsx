import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutFragmen from './fragmenPages/AboutFragmen';
import SkilsFragment from './fragmenPages/SkilsFragment';
import Projects from './projectPages/Projects';

function About() {
  return (
    <>
     
        <Router>
          <div className="w-full h-14 rounded " id='#aboutpages'>
            <div className="w-5/6 flex justify-evenly px-2 m-auto border-b-2 mt-9">
              <Link to="/" className="w-28 rounded-sm text-center h-full hover:bg-rose-800">
                About Me
              </Link>
              <Link to="/skils" className="w-28 rounded-sm text-center h-full hover:bg-rose-800 ">
                My Skils
              </Link>
            </div>
          </div>
          <div className="m-auto w-5/6  rounded-sm p-5  bg-slate-900">
          <Routes>
            <Route path="/" element={<AboutFragmen />} />
            <Route path="/skils" element={<SkilsFragment />} />
          </Routes>
          </div>
        </Router>
        <div className='w-5/6 mb-36 mx-auto'>
          <div id='projectpages' className="w-5/6 mt-5 flex justify-evenly px-2 m-auto border-b-2">
              <h2>My Projects</h2>
          </div>
          <div className='p-5   bg-slate-900 mt-8'>
            <Projects />
          </div>
        </div>
    </>
  );
}

export default About;
