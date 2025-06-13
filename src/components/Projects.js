import React from 'react';
import '../styles/Projects.css'; // Adjust path as needed

const projects = [
  {
    title: 'Craft&Decors',
    description: 'Craft&Decors is a website  sells handmade crafts and home decor items.',
    techStack: ['HTML', 'CSS', 'Python', 'Flask', 'JavaScript', 'Bootstrap','DynamoDB', 'AWS','S3'],
    image: 'https://craftndecor.in/cdn/shop/files/2_ba59174f-5054-467a-a4b5-d7f8c78cdefe.jpg?v=1748808627',
    live: 'https://www.craftndecors.com/',
    cached: '#',
  },
 
  {
    title: 'Manan',
    description: 'The website is for creators to showcase their talent and skillsto people  with there creative story.',
    techStack: ['React.js', 'Express.js', 'Node.js','MongoDB', 'Axios', 'Bootstrap'],
    image: '/manan.png',
    live: 'https://manan-nine.vercel.app/',
  },
    {
    title: 'Xenturalt Code it solutions',
    description: 'This is a website for Xenturalt Code it solutions, a company that provides IT solutions and services.',
    techStack: ['React.js', 'Express.js', 'Node.js','MongoDB', 'Axios', 'Bootstrap'],
    image: '/xenturalt.png',
    live: 'https://xenturalt-landing-page-a8gv.vercel.app/',
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2><span className="hashtag">#</span>projects</h2>
        <a href="#view-all" className="view-all">View all ⟶</a>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="tech-tags">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech">{tech}</span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.live} className="btn">Live ⬌</a>
              {project.cached && <a href={project.cached} className="btn cached">Cached ⟶</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
