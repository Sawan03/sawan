import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Dot Digital Agency',
    description: 'A high-performance digital marketing agency platform. Built using pure HTML, CSS, and JS for maximum speed, SEO efficiency, and a pixel-perfect responsive design.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/dotgrow.png', 
    live: 'https://dotdigitalagency.in/',
  },
  {
    title: 'Sonar Saaj',
    description: 'A premium e-commerce jewelry store. Features a fully functional shopping cart, secure payment gateways, and dynamic inventory management using WooCommerce.',
    techStack: ['WordPress', 'WooCommerce', 'E-Commerce'],
    image: '/sonar.png',
    live: 'https://sonarsaaj.com/',
  },
  {
    title: 'Manan',
    description: 'A creative storytelling platform for artists to showcase talent. Built with a robust backend to handle user stories and media securely.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    image: '/manan.png',
    live: 'https://manan-nine.vercel.app/',
  },
  {
    title: 'Xenturalt Solutions',
    description: 'Corporate IT solutions portal. Designed for scalability with a focus on modern UI/UX principles and fast load times.',
    techStack: ['React.js', 'Express', 'Node.js', 'Axios'],
    image: '/xenturalt.png',
    live: 'https://xenturalt-landing-page-a8gv.vercel.app/',
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      
      {/* Header with decorative line */}
      <div className="projects-header">
        <div className="header-title">
          <h2><span className="hashtag">#</span>projects</h2>
          <div className="line"></div>
        </div>
        <a href="https://github.com/Sawan03" target="_blank" rel="noreferrer" className="view-all">
          View all <span className="arrow">~~&gt;</span>
        </a>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            {/* Image Area */}
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay"></div>
            </div>

            {/* Tech Stack Tags */}
            <div className="tech-tags">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech">{tech}</span>
              ))}
            </div>

            {/* Content */}
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {/* Buttons */}
              <div className="buttons">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn live-btn">
                  Live <span className="btn-icon">🔗</span>
                </a>
                
                {/* Cached button logic (optional, only if data exists) */}
                {project.cached && (
                  <a href={project.cached} className="btn cached-btn">
                    Cached <span className="btn-icon">💾</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
