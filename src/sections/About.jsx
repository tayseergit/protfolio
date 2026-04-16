import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container">
        <SectionHeader title="About Me" subtitle="A brief overview of who I am and what I focus on." />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.8',
              color: 'var(--text-light)',
              fontWeight: '400'
            }}>
              {portfolioData.about.description}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem'
            }}
          >
            {/* Quick stats/focus areas snippet */}
            {[
              { label: 'Mobile Excellence', value: '100% Native Feel' },
              { label: 'Real-Time Systems', value: 'Low Latency' },
              { label: 'Performance', value: 'Highly Optimized' },
              { label: 'Architecture', value: 'Clean & Scalable' }
            ].map((stat, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)'
              }}>
                <h4 style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.125rem' }}>{stat.value}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
