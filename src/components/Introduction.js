import React, { useState } from 'react';
import './Introduction.css'; 
import hero from '../assets/hero-img.png'
import resume from "../assets/resume.pdf"; 

const Introduction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu after clicking (for mobile)
  };
  return (
    <section className="introduction">
      <div className="introduction-text">
        <h1 className="animated-text">Hi, I'm Vishal Singh</h1>
        <h5 className="animated-paragrapgh" >Turning complex problems into insights through data, strategy, and curiosity.</h5>
        <p className="animated-paragraph">
        I'm a B.E. graduate in Electronics and Communication from SLIET Longowal, now pursuing an MBA in Data Science and AI. I enjoy blending tech and business—building dashboards, analyzing data, and solving real problems. I’m looking to grow in a firm where I can create meaningful impact.
        </p>
        <a onClick={() => handleClick('resume')} download className="hero-btn">
            Know More
          </a>
      </div>
      <div className="introduction-image">
      <img src={hero} alt="hero" className="hero"/>
      </div>
    </section>
  );
};

export default Introduction;
