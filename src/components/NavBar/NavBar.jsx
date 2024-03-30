import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Ensure this points to your NavBar.css file correctly

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-shrink' : ''}`}>

      <div className="navbar-logo">
        <Link to='/'>

            <img src="mgip-logo.png" alt="Logo" />
        </Link>
      </div>

      <button
            className={`hamburger ${isNavExpanded ? 'active' : ''}`}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            aria-label="Toggle navigation"
        >
            ☰
      </button>

      <ul className={`navbar-links ${isNavExpanded ? 'expanded' : ''}`}>
        <li><Link to="/" onClick={() => setIsNavExpanded(false)}>About</Link></li>
        <li><Link to="/team" onClick={() => setIsNavExpanded(false)}>Team</Link></li>
        <li><Link to="/contact" onClick={() => setIsNavExpanded(false)}>Contact</Link></li>
      </ul>

    </nav>
  );
};