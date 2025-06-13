import React from 'react';
import '../styles/Skills.css'; // Adjust path as necessary

const skills = {
  Languages: ['Python', 'C', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  Frameworks: ['Flask', 'Flask API', 'Node.js', 'React.js', 'Express.js', 'SQL Alchemy', 'FastAPI (Basics)'],
  Databases: ['MongoDB', 'MySQL', 'DynamoDB', 'SQLite'],
  Tools: ['Git', 'GitHub', 'Docker'],
  Courses: ['DBMS', 'Data Structures'],
  Other: ['REST API', 'JWT', 'Responsive Design', 'Payment Gateway Integration'],
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2><span className="hashtag">#</span>skills</h2>
      <div className="skills-container">
        <div className="bg-squares">
          <div className="dot-grid"></div>
          <div className="box box1"></div>
          <div className="dot-grid small"></div>
          <div className="box box2"></div>
          <div className="overlap-box"></div>
        </div>
        <div className="skills-boxes">
          {Object.entries(skills).map(([category, items], index) => (
            <div className="skill-card" key={index}>
              <h3>{category}</h3>
              <p>{items.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
