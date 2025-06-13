import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section" id="about-me">
      <h2><span className="hashtag">#</span>about-me</h2>

      <div className="about-container">
        <div className="about-text">
          <h3>Hello, I'm Sawan Rathore!</h3>
          <p>
            I'm a <span className="highlight">Full-Stack Developer</span> currently working remotely and open to freelance opportunities. I specialize in crafting scalable, responsive, and dynamic web applications using modern technologies like <strong>React.js, Flask, Node.js, MongoDB</strong>, and more.
          </p>
          <p>
            I’ve completed an internship at <strong>IIT Indore Drishti CPS Foundation</strong>, where I worked on real-time REST APIs and payment integrations. Additionally, I’ve delivered a complete freelancing project for <strong>CraftNDecors</strong> — building features like secure payments, order history tracking, and backend integration.
          </p>
          <p>
            Currently, I’m engaged in multiple projects focused on enhancing user experience, backend optimization, and secure data handling. I’m passionate about clean code, smart design, and meaningful digital products.
          </p>

          <div className="resume-buttons">
           
            <a
              href="/Sawan Rathore.docx"
              download="Sawan_Rathore_Resume.docx"
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="about-image">
          <img
            src="/sawan.jpeg"
            alt="Sawan Rathore"
          />
          <div className="dots top-dots"></div>
          <div className="dots mid-dots"></div>
          <div className="circle-highlight"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
