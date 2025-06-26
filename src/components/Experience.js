import React from 'react';
import './Experience.css';

const experienceData = [
  {
    year: "June 2025 – July 2025",
    title: "Finance Intern",
    company: "Ideator Engineering Private Limited",
    description:
      "Worked on predictive modeling and customer segmentation using Python and Scikit-learn. Built dashboards in Power BI to visualize key business metrics and presented actionable insights to stakeholders.",
  },
  {
    year: "Jan 2024 – July 2024",
    title: "Web Development Intern",
    company: "UdyamWell Private Limited",
    description:
      "Developed a prototype for an NLP-powered chatbot using Hugging Face Transformers. Conducted literature reviews and fine-tuned BERT-based models for intent classification.",
  },
  {
    year: "2023 – 2023",
    title: "Overall Student Coordinator ",
    company: "Madhuram: SLIET's annual socio-cultural fest",
    description:
      "Led a team of 20+ students to organize 10+ coding events and hackathons. Mentored juniors in data structures and problem solving, and established industry guest lecture series.",
  },
  {
    year: "2022 – 2023",
    title: "Student Co-Coordinator",
    company: "InternWell Club SLIET",
    description:
      "Led a team of 20+ students to organize 10+ coding events and hackathons. Mentored juniors in data structures and problem solving, and established industry guest lecture series.",
  },
];

const Experience = () => {
  return (
    <section className="exp-section">
      <h2 className="exp-title">Experience</h2>
      <div className="exp-timeline">
        {experienceData.map((item, index) => (
          <div
            className={`exp-item ${index % 2 === 0 ? 'exp-left' : 'exp-right'}`}
            key={index}
          >
            <div className="exp-content-box">
              <span className="exp-badge">{item.year}</span>
              <h3 className="exp-role">{item.title}</h3>
              <h4 className="exp-company">{item.company}</h4>
              <p className="exp-description">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="exp-line" />
      </div>
    </section>
  );
};

export default Experience;
