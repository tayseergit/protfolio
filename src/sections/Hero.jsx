import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

export const Hero = () => {
  const { name, title, tagline, availability, image, cvLink } = portfolioData.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-split">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="availability-badge">
            <span className="dot"></span>
            {availability}
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-name">
            Hi, I'm <span className="text-primary">{name}</span>.
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="hero-title">
            {title}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="hero-tagline">
            {tagline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-cta-group">
            <Button href="#contact" as="a">Contact Me</Button>
            <Button href={cvLink} as="a" variant="outline">Download CV</Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image-circle">
            {image ? (
              <img src={image} alt={name} />
            ) : (
              <div className="hero-image-placeholder">Add Image Here</div>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="hero-bg-accent"></div>
    </section>
  );
};
