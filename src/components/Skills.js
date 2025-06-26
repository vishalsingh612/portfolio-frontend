import React from 'react';
import './Skills.css';
import { FaCode, FaDatabase, FaChartBar, FaTools, FaPalette, FaProjectDiagram } from 'react-icons/fa';
import { MdAttachMoney, MdTrendingUp, MdWork, MdCampaign } from 'react-icons/md';

const technicalSkills = [
  { icon: <FaCode />, title: 'Programming', skills: ['C++', 'Python (Pandas, NumPy, Matplotlib)', 'SQL'] },
  { icon: <FaChartBar />, title: 'Data Analytics', skills: ['Power BI', 'Pandas', 'NumPy', 'Matplotlib'] },
  { icon: <FaTools />, title: 'DevOps', skills: ['Git', 'GitHub', 'CI/CD'] },
  { icon: <FaDatabase />, title: 'Web Development', skills: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Node.js'] },
  { icon: <FaPalette />, title: 'Design Tools', skills: ['Photoshop', 'Illustrator', 'Figma', 'Canva'] },
  { icon: <FaProjectDiagram />, title: 'Tools & Tech', skills: ['MS Office', 'ProwessIQ', 'MySQL'] },
];

const managementSkills = [
  { icon: <MdAttachMoney />, title: 'Finance', skills: ['Financial modeling', 'Budgeting & forecasting', 'P&L analysis'] },
  { icon: <MdTrendingUp />, title: 'Strategy', skills: ['Business planning', 'Market research', 'Data-driven decision making'] },
  { icon: <MdWork />, title: 'Project Management', skills: ['Task planning & scheduling', 'Team coordination', 'Agile/Scrum methodology'] },
  { icon: <MdCampaign />, title: 'Marketing', skills: ['Digital marketing', 'Content strategy', 'Customer segmentation'] },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Technical Skills</h2>
      <div className="skills-grid">
        {technicalSkills.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{category.icon}</div>
            <h3 className="card-title">{category.title}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="skills-heading" >Management Skills</h2>
      <div className="skills-grid" style={{marginBottom:"10px"}}>
        {managementSkills.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{category.icon}</div>
            <h3 className="card-title">{category.title}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
