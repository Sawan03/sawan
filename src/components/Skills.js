import React from 'react';
import '../styles/Skills.css';

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ['Python', 'JavaScript', 'C++', 'C', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚡",
    skills: ['Flask', 'React.js', 'Node.js', 'Express.js', 'FastAPI', 'SQL Alchemy']
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'DynamoDB']
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman']
  },
  {
    title: "Core Concepts",
    icon: "🧠",
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'OOPs', 'REST APIs']
  },
  {
    title: "Other",
    icon: "🌐",
    skills: ['JWT Auth', 'Payment Gateways', 'Responsive Design', 'Linux']
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      
      <div className="skills-header">
        <h2><span className="hashtag">#</span>skills</h2>
        <div className="line"></div>
      </div>

      <div className="skills-container">
        
        {/* Left: Decorative Art (The "Visual" side) */}
        <div className="skills-art">
          <div className="art-box box-large"></div>
          <div className="art-box box-small"></div>
          <div className="dots-grid"></div>
          <div className="floating-icon python">🐍</div>
          <div className="floating-icon react">⚛️</div>
        </div>

        {/* Right: The Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="card-header">
                <span className="cat-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span className="skill-pill" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
