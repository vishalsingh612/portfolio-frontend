import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Finance Dashboard',
    image: '/images/finance-dashboard.png',
    description: 'Built an interactive Power BI dashboard to visualize company financials and customer segments.',
    liveLink: 'https://example.com/finance-dashboard',
    githubLink: 'https://github.com/yourusername/finance-dashboard',
  },
  {
    title: 'Customer Segmentation ML',
    image: '/images/customer-segmentation.png',
    description: 'Implemented customer clustering using KMeans & visualized segments using Python & Seaborn.',
    liveLink: 'https://example.com/customer-segmentation',
    githubLink: 'https://github.com/yourusername/customer-segmentation-ml',
  },
  {
    title: 'Portfolio Website',
    image: '/images/portfolio-site.png',
    description: 'A responsive personal portfolio built with React, showcasing resume, projects, and contact.',
    liveLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/yourusername/portfolio-site',
  },
];

const Projects = () => {
  return (
    <section className="project-section" style={{marginBottom:"60px"}}>
      <h2 className="project-heading">Projects</h2>
      <div className="project-grid" >
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn secondary">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
