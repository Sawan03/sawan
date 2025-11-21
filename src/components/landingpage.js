import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';
// You will need to import icons or use simple emojis as placeholders if you don't have an icon library installed
// import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'; 

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // --- Typewriter Effect Logic ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack Python Developer", 
    "Freelancer", 
    "Django & React Enthusiast", 
    "Tech Content Creator"
  ];

  // --- Experience Data ---
  const experiences = [
    {
      id: 1,
      role: "Python Developer (Full Stack)",
      company: "Vigisolvo",
      date: "Nov 2025 – Present",
      description: [
        "Handling full-stack project lifecycles single-handedly, ensuring seamless integration between frontend and backend.",
        "Fixing UI/UX issues in React.js to improve user experience and interface responsiveness.",
        "Optimizing backend logic in Python for efficiency, security, and scalability.",
        "Managing version control via Git/GitHub and performing production deployments on Linux servers."
      ]
    },
    {
      id: 2,
      role: "Freelance Python Developer",
      company: "CraftNDecors",
      date: "Apr 2024 – Jun 2024",
      description: [
        "Integrated Razorpay secure payment gateway, ensuring reliable transaction processing.",
        "Implemented dynamic cart logic and order history tracking using Flask and AWS DynamoDB.",
        "Developed backend logic to reflect purchased items dynamically in user profiles."
      ]
    },
    {
      id: 3,
      role: "Python Developer Intern",
      company: "IIT Indore Drishti CPS Foundation",
      date: "Jan 2024 – Mar 2024",
      description: [
        "Developed optimized RESTful APIs using Flask and SQLite for real-time transaction updates.",
        "Integrated payment webhooks for automated status tracking.",
        " improved backend performance by 20% through algorithm optimization and code refactoring.",
        "Collaborated with the frontend team to ensure consistent API responses."
      ]
    }
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const toggleBurger = () => setIsOpen(!isOpen);

  return (
    <section className="landing-container" id="home">
      {/* Background Glow Elements */}
      <div className="glow-circle glow-1"></div>
      <div className="glow-circle glow-2"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="code-tag">&lt;</span> 
          Sawan Rathore 
          <span className="code-tag">/&gt;</span>
        </div>
        
        <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleBurger}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li><a href="#home" className="active" onClick={() => setIsOpen(false)}>#home</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>#experience</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>#projects</a></li>
          <li><a href="#about-me" onClick={() => setIsOpen(false)}>#about-me</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>#skills</a></li>
          <li><a href="#contacts" onClick={() => setIsOpen(false)}>#contacts</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <div className="badge">👋 Available for projects</div>

          <h1>
            I'm <span className="highlight1">Sawan Rathore</span>,<br />
            <span className="highlight2 type-text">{text}</span>
            <span className="cursor">|</span>
          </h1>
          
          <p className="subtext">
            I build responsive web apps using <strong>Flask, React, MongoDB</strong>, and more.<br />
            Let’s connect and create something impactful.
          </p>

          <div className="contact-info">
            <a href="mailto:sawanrathore815@gmail.com" className="contact-link">
              <span className="icon">📧</span> sawanrathore815@gmail.com
            </a>
            <a href="tel:+918305761782" className="contact-link">
              <span className="icon">📞</span> +91 8305761782
            </a>
            <a href="https://www.linkedin.com/in/sawanrathore03" target="_blank" rel="noreferrer" className="contact-link">
              <span className="icon">🔗</span> LinkedIn
            </a>
          </div>

          <button className="contact-btn">Contact Me &rarr;</button>
        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image">
            <img src="/sawan.jpeg" alt="Sawan Profile" />
            <div className="working-status">
              <span className="dot pulse"></span> 
              Working with <span className="bold">Vigisolvo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-section" id="experience">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-container">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="exp-header">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-date">{exp.date}</span>
              </div>
              <h4 className="exp-company">@ {exp.company}</h4>
              <ul className="exp-details">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
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
