
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link here
import './NavBar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import mgipLogo from '../../public/mgip-logo.png';
// Adjust the NavBar component
export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsScrolled(!entry.isIntersecting);
        },
        {
          threshold: 0.25,
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }, []);
  
    return (
      <>
        <nav className={`navbar ${isScrolled ? 'navbar-shrink' : ''}`}>
          <div className="navbar-logo">
            <Link to='/'>
              <img src={mgipLogo} alt="Logo" />
            </Link>
          </div>
  
          <button
            className={`hamburger ${isNavExpanded ? 'active' : ''}`}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            aria-label="Toggle navigation"
          >
            <RxHamburgerMenu />
          </button>
  
          <ul className={`navbar-links ${isNavExpanded ? 'expanded' : ''}`}>
            <li><Link to="/" onClick={() => setIsNavExpanded(false)}>About</Link></li>
            <li><Link to="/team" onClick={() => setIsNavExpanded(false)}>Team</Link></li>
            <li><Link to="/careers" onClick={() => setIsNavExpanded(false)}>Careers</Link></li>
            <li><Link to="/contact" onClick={() => setIsNavExpanded(false)}>Contact Us</Link></li>
          </ul>
        </nav>
  
        {/* Use a smaller height or place this strategically */}
        <div ref={sectionRef} style={{ height: '1px' }}></div> {/* Reduced height */}
      </>
    );
  };
  