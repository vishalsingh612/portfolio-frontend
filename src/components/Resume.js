import React from 'react';
import './Resume.css';
import main from "../assets/main-img.png"; // Profile image
import resume from "../assets/resume.pdf"; // Resume PDF file

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume-content">
        <div className="left-content">
          <h2>More About Me</h2>
          <p>📚 I am deeply passionate about exploring and applying the latest advancements in Data Science and AI to real-world challenges.</p>
          <div className="statistics">
            <div className="stat">
              <h4>3+</h4>
              <p>Years of professional and academic experience</p>
            </div>
            <div className="stat">
              <h4>6+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h4>3+</h4>
              <p>Certifications in design , development and analytics</p>
            </div>
          </div>
          <a href={resume} download className="btn">
            Download Resume
          </a>
        </div>
        <div className="right-content">
          <img src={main} alt="Profile" className="profile-img2" />
        </div>
      </div>
    </section>
  );
};

export default Resume;
