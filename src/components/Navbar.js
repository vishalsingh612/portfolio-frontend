import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/vishal-logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); 
  };

  return (
    <nav className="navbar">
      <img onClick={() => handleClick('introduction')} src={logo} alt="Logo" className="logo" />
      <div
        className={`navbar-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li onClick={() => handleClick('resume')}>Know Me</li>
        <li onClick={() => handleClick('education')}>Education</li>
        <li onClick={() => handleClick('experience')}>Experience</li>
        <li onClick={() => handleClick('skills')}>Skills</li>
        <li onClick={() => handleClick('projects')}>Projects</li>
        <li onClick={() => handleClick('contact')}>Contact Me</li>
      </ul>
    </nav>
  );
};

export default Navbar;
