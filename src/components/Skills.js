import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  {
    category: "Languages",
    color: "#4da6ff", // Blue
    icon: "💻",
    items: ['Python', 'JavaScript', 'C++', 'C', 'SQL', 'HTML5', 'CSS3']
  },
  {
    category: "Frameworks",
    color: "#c792ea", // Purple
    icon: "⚛️",
    items: ['React.js', 'Django', 'Flask', 'SQL Alchemy']
  },
  {
    category: "Databases",
    color: "#04d361", // Green
    icon: "🗄️",
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'DynamoDB']
  },
  {
    category: "Tools",
    color: "#ff9f43", // Orange
    icon: "🛠️",
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'Linux']
  },
  {
    category: "Concepts",
    color: "#ff6b6b", // Red
    icon: "🧠",
    items: ['Data Structures', 'Algorithms', 'DBMS', 'OOPs', 'REST APIs']
  },
  {
    category: "Deployment",
    color: "#feca57", // Yellow
    icon: "🚀",
    items: ['AWS (Basic)', 'Heroku', 'Vercel', 'Netlify', 'Gunicorn']
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      
      {/* Animated Background */}
      <div className="tech-background">
        <div className="grid-line horizontal"></div>
        <div className="grid-line vertical"></div>
      </div>

      <div className="skills-header">
        <h2><span className="hashtag">#</span>skills</h2>
        <div className="line"></div>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div 
            className="skill-card" 
            key={index}
            style={{ '--accent-color': skill.color }} // Pass color to CSS
          >
            <div className="card-top">
              <div className="icon-box">{skill.icon}</div>
              <h3>{skill.category}</h3>
            </div>

            <div className="skill-list">
              {skill.items.map((item, idx) => (
                <span className="skill-pill" key={idx}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
