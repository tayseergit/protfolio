import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

export const Projects = () => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <SectionHeader title="Featured Projects" subtitle="A selection of my best work focusing on real-time systems, scalable architecture, and rich mobile experiences." />
        
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                className={`project-card ${isEven ? 'layout-normal' : 'layout-reverse'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="project-image-wrapper">
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="project-image-placeholder">
                      <span>{project.imagePlaceholder}</span>
                    </div>
                  )}
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-description-box">
                    <p>{project.description}</p>
                  </div>
                  
                  <ul className="project-tech-list">
                    {project.techStack.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="GitHub Repository">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.4 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6 2.7 4.8 3.1 4.8 3.1c-.8 1.8-.3 3.1-.1 3.4-.9.9-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5-.4.4-.8 1.1-.9 2.1-.8.4-2.8.9-4-1.1 0 0-.7-1.3-2-1.4 0 0-1.3-.1-.1 1.1 0 0 1.2 1.6 2.5 2.5 1.1.9 2.5.8 2.5.8v3"/><path d="M10 20c-3 1-5 1-7-1"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
