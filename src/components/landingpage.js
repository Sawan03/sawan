import React, { useState } from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBurger = () => setIsOpen(!isOpen);

  return (
    <section className="landing-container" id="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">💻 Sawan Rathore</div>
        <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleBurger}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li><a href="#home" className="active">#home</a></li>
          <li><a href="#projects">#projects</a></li>
          <li><a href="#about-me">#about-me</a></li>
          <li><a href="#skills">#skills</a></li>
          <li><a href="#contacts">#contacts</a></li>
          
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>
            I'm <span className="highlight1">Sawan Rathore</span>,<br />
            {/* --- UPDATED ROLE HERE --- */}
            a <span className="highlight2">Full Stack Python Developer</span> &<br />
            <span className="highlight1">Freelancer</span>
          </h1>
          <p className="subtext">
            I build responsive web apps using <strong>Flask, React, MongoDB</strong>, and more.<br />
            Let’s connect and create something impactful.
          </p>

          <div className="contact-info">
            <p>📧 <a href="mailto:sawanrathore815@gmail.com">sawanrathore815@gmail.com</a></p>
            <p>📞 <a href="tel:+918305761782">+91 8305761782</a></p>
            <p>🔗 <a href="https://www.linkedin.com/in/sawanrathore03" target="_blank" rel="noreferrer">LinkedIn</a></p>
          </div>

          <button className="contact-btn">Contact Me</button>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src="/sawan.jpeg" alt="Sawan Profile" />
          <div className="working-status">
            {/* --- UPDATED COMPANY HERE --- */}
            <span className="dot" /> Currently working on <span className="bold">Vigisolvo</span>
          </div>
        </div>
      </div>

      {/* Quote */}
     <div className="quote-box">
  <p className="quote">“You focus on your business, I’ll handle the tech that drives it.”</p>
  <p className="author">– Sawan Rathore</p> 
</div>

    </section>
  );
};

export default LandingPage;
