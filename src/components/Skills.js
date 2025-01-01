import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Programming',
      icon: '💻',
      items: ['C++', 'Python (Pandas, NumPy, Matplotlib)', 'SQL'],
    },
    {
      category: 'Data Analytics',
      icon: '📊',
      items: ['PowerBI', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      category: 'DevOps',
      icon: '⚙️',
      items: ['Git', 'GitHub', 'CI/CD'],
    },
    {
      category: 'Web Development',
      icon: '🌐',
      items: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Node.js'],
    },
    {
      category: 'Design',
      icon: '🎨',
      items: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    },
    {
      category: 'Tools & Technologies',
      icon: '🛠️',
      items: ['MS Office', 'ProwessIQ', 'MySQL'],
    },
    {
      category: 'Soft Skills',
      icon: '💬',
      items: [
        'Creative thinking and problem-solving',
        'Excellent communication and presentation skills',
        'Team collaboration and leadership',
      ],
    },
  ];

  return (
    <section className="skills">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-card">
            <div className="card-icon">{skillCategory.icon}</div>
            <h3 className="skill-category">{skillCategory.category}</h3>
            <ul className="skill-list">
              {skillCategory.items.map((item, i) => (
                <li key={i} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
