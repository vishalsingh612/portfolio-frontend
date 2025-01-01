import React from 'react';
import './Introduction.css'; 
import hero from '../assets/hero-img.png'
const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction-text">
        <h1 className="animated-text">Hi, I'm Vishal Singh</h1>
        <p className="animated-paragraph">
        I'm an MBA student specializing in Data Science and AI at IIT Mandi. My passion lies in building intelligent solutions that drive business innovation and efficiency. With a strong foundation in engineering and a creative mindset, I bridge the gap between technology and strategy.
        </p>
      </div>
      <div className="introduction-image">
      <img src={hero} alt="hero" className="hero"/>
      </div>
    </section>
  );
};

export default Introduction;
