import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/vishal-logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu after clicking (for mobile)
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div
        className={`navbar-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li onClick={() => handleClick('introduction')}>Know Me</li>
        <li onClick={() => handleClick('skills')}>Skills</li>
        <li onClick={() => handleClick('resume')}>Resume</li>
        <li onClick={() => handleClick('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
