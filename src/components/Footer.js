import React from 'react';
import '../styles/Footer.css'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="footer-section" id="contacts">
      <h2><span className="hashtag">#</span>contacts</h2>

      <div className="footer-content">
        <div className="footer-left">
          <p>
            I’m actively looking for freelance opportunities and remote work. If you have any ideas, projects,
            or just want to say hello — feel free to reach out!
          </p>
        </div>

        <div className="footer-right">
          <div className="contact-box">
            <p className="contact-title">Message me here</p>
            <p>📧 sawanrathore815@gmail.com</p>
            <p>🔗 <a href="https://linkedin.com/in/sawanrathore03" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p>📱 +91 8305761782</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-author">
          <p><strong>⤴ Sawan Rathore</strong> — sawanrathore815@gmail.com</p>
          <p>Full-Stack Developer | Freelancer | Problem Solver</p>
        </div>

        <div className="footer-media">
          <p><strong>Media</strong></p>
          <div className="media-icons">
            <a href="https://github.com/Sawan03" target="_blank" rel="noreferrer">🐱 GitHub</a>
            <a href="https://linkedin.com/in/sawanrathore03" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a href="mailto:sawanrathore815@gmail.com">✉️ Email</a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} — Crafted by Sawan Rathore</p>
      </div>
    </footer>
  );
};

export default Footer;
