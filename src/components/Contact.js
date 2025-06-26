import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-container">
        
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><FaEnvelope /> mb24064@students.iitmandi.ac.in</p>
          {/* <p><FaPhoneAlt /> +91-XXXXXXXXXX</p> */}
          <p><FaMapMarkerAlt /> IIT Mandi, Himachal Pradesh</p>

          <div className="contact-icons">
            <a href="https://linkedin.com/in/vishalsinghiitmandi" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/vishalsingh612" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:mb24064@students.iitmandi.ac.in">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com/vxshal.s" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
