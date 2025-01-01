import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Find Me On </h2>
      <div className="contact-links">
        <a href="https://linkedin.com/in/vishalsinghiitmandi" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaLinkedin />
        </a>
        <a href="https://github.com/vishalsingh612" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaGithub />
        </a>
        <a href="mailto:mb24064@students.iitmandi.ac.in" className="contact-icon">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
