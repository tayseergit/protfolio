import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader title="Technical Skills" subtitle="Technologies, tools, and architectures I work with to build high-performance applications." />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              className="hover-lift"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg)'
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'inline-block' }}></span>
                {skillGroup.category}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {skillGroup.items.map((item, i) => (
                  <span key={i} style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--bg-alt)',
                    color: 'var(--text-light)',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: '1px solid var(--border)'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
