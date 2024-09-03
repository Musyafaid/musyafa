
import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css'; 

export default function AboutFragment() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div>
      <h1
        ref={ref}
        className={` text-xl pb-1 w-36 scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        About me
      </h1>
      <div className='text-justify'>
        <p>
          I am a student at SMKN 1 Bukateja, specializing in Software Engineering (RPL) in my final year. With a strong foundation in programming and software development, I am passionate about using technology to address real-world challenges. My studies and hands-on projects have provided me with valuable skills in coding, debugging, and project management. I am eager to apply these skills in a professional environment and contribute to innovative projects. I am currently seeking internship opportunities or collaborative projects to gain practical experience and enhance my expertise. Connect with me if you have opportunities or advice in the software engineering field.
        </p>
      </div>
    </div>
  );
}
