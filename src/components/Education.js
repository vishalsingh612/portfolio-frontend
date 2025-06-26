import React from 'react';
import './Education.css';

const educationData = [
  {
    year: "2024 - 2026",
    title: "MBA in DS & AI",
    institution: "IIT Mandi",
    description:
      "Currently juggling data, algorithms, and marketing buzzwords without losing my sanity. Learning that AI might be smart, but humans still rule at creative chaos and last-minute deadlines.",
  },
  {
    year: "2020 - 2024",
    title: "B.E. in Electronics & Communication",
    institution: "SLIET Longowal",
    description:
      "Spent years convincing my laptop to do what I wanted (and sometimes it actually listened). Learned that debugging code is 90% frustration, 10% pure magic—and caffeine is essential.",
  },
  {
    year: "2005 - 2020",
    title: "Schooling",
    institution: "Comet Mensa Sen. Sec. Public School",
    description:
      "Where I mastered the art of surviving early morning classes and perfected the skill of “studying” while daydreaming.",
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-degree">{item.title}</h3>
              <h4 className="timeline-institution">{item.institution}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
