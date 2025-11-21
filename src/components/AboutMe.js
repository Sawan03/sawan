import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section" id="about-me">
      
      <div className="about-header">
        <h2><span className="hashtag">#</span>about-me</h2>
        <div className="line"></div>
      </div>

      <div className="about-container">
        
        {/* Left Side: Text & Cards */}
        <div className="about-text">
          <h3 className="greeting">
            Hello, I'm <span className="text-highlight">Sawan Rathore!</span>
          </h3>
          
          <p className="intro-para">
            I’m a <strong>Full-Stack Python Developer</strong> based in Indore. 
            I don't just write code; I solve problems. From building scalable backends 
            to crafting intuitive frontends, I focus on delivering value.
          </p>

          {/* Dynamic Experience Cards */}
          <div className="experience-grid">
            <div className="exp-card">
              <span className="exp-icon">🎓</span>
              <div className="exp-details">
                <h4>IIT Indore (Drishti CPS)</h4>
                <p>Internship: Real-time APIs & Payment Gateways</p>
              </div>
            </div>

            <div className="exp-card">
              <span className="exp-icon">💼</span>
              <div className="exp-details">
                <h4>CraftNDecors</h4>
                <p>Freelance: E-commerce w/ Order Tracking</p>
              </div>
            </div>

            <div className="exp-card">
              <span className="exp-icon">🚀</span>
              <div className="exp-details">
                <h4>Vigisolvo</h4>
                <p>Current: Backend Optimization & Security</p>
              </div>
            </div>
          </div>

          {/* Resume Button */}
          <div className="resume-wrapper">
            <a 
              href="/Sawan Rathore.docx" 
              download="Sawan_Rathore_Resume.docx" 
              className="resume-btn"
            >
              Download Resume <span className="arrow">⬇</span>
            </a>
          </div>
        </div>

        {/* Right Side: Image with Decor */}
        <div className="about-image-wrapper">
          <div className="image-border">
             <img src="/sawan.jpeg" alt="Sawan Rathore" className="profile-pic" />
          </div>
          
          {/* Decorative Elements */}
          <div className="dots-pattern"></div>
          <div className="square-box"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
