import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">Tayseer<span>.</span></a>
        <ul className="nav-menu">
          {navLinks.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
