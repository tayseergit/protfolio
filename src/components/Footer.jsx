import React from 'react';

export const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem 0',
      borderTop: '1px solid var(--border)',
      color: 'var(--text-light)',
      fontSize: '0.875rem'
    }}>
      <p>&copy; {new Date().getFullYear()} Tayseer Matar. All rights reserved.</p>
    </footer>
  );
};
