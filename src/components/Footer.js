import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id="contacts">
      {/* Top Border Gradient */}
      <div className="footer-line"></div>

      <div className="footer-container">
        
        {/* Left Side: Pitch */}
        <div className="footer-left">
          <h2 className="section-title">
            <span className="hashtag">#</span>contacts
          </h2>
          <p className="footer-desc">
            I’m actively looking for <span className="highlight">freelance opportunities</span> and remote work. 
            Whether you have a question, a project idea, or just want to say hi, I’ll try my best to get back to you!
          </p>
          
          {/* Social Media Buttons */}
          <div className="social-links">
            <a href="https://github.com/Sawan03" target="_blank" rel="noreferrer" className="social-btn">
              Github
            </a>
            <a href="https://linkedin.com/in/sawanrathore03" target="_blank" rel="noreferrer" className="social-btn">
              LinkedIn
            </a>
            <a href="mailto:sawanrathore815@gmail.com" className="social-btn">
              Email
            </a>
          </div>
        </div>

        {/* Right Side: Contact Box */}
        <div className="footer-right">
          <div className="contact-card">
            <h3>Message me here</h3>
            
            <div className="contact-item">
              <span className="icon">📧</span>
              <a href="mailto:sawanrathore815@gmail.com">sawanrathore815@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <span className="icon">📱</span>
              <a href="tel:+918305761782">+91 8305761782</a>
            </div>

            <div className="contact-item">
              <span className="icon">📍</span>
              <span>Indore, Madhya Pradesh</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} <span className="brand-name">Sawan Rathore</span>. 
          Built with <span className="heart">❤</span> using React & Flask.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
