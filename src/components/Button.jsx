import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

export const Button = ({ children, variant = 'primary', onClick, as = 'button', href, className = '' }) => {
  const Component = as === 'a' ? motion.a : motion.button;
  const isInternalLink = href && href.startsWith('#');
  const props = as === 'a' 
    ? { href, target: isInternalLink ? undefined : "_blank", rel: isInternalLink ? undefined : "noopener noreferrer" } 
    : { onClick };

  return (
    <Component
      {...props}
      className={`btn btn-${variant} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Component>
  );
};
