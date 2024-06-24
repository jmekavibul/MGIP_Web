import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'; // Ensure CSS is linked
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import mgipLogo from '../../pictures/mgip-logo.png';

const Footer = ({credits}) => {
  const currentYear = new Date().getFullYear(); // Gets the current year

  return (
    <>
      <div style={{ width: '100%', height: '20px', backgroundColor: "#6C8EAD" }} />
      <div className='footer-container'>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section company-info">
              <img src={mgipLogo} alt="mgip Logo" style={{ maxWidth: '250px', height: 'auto' }} />
            </div>
            <div className='link-parent'>
              <div className="footer-section quick-links">
                <h4 style={{ marginBottom: '0px' }}>QUICK LINKS</h4>
                <ul style={{ marginTop: '10px' }}>
                  <li><Link to="/" >About</Link></li>
                  <li><Link to="/team">Team</Link></li>
                </ul>
              </div>
              <div className="footer-section contact-info">
                <h4 style={{ marginBottom: '0px' }}>GET IN TOUCH</h4>
                <ul style={{ marginTop: '10px' }}>
                  <li><FaLinkedin /> <a href="https://www.linkedin.com">LinkedIn</a></li>
                  <li><IoMdMail /> <a href="mailto:plai2@gmu.edu">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-credits">
            <span>© {currentYear} MUNCY, GEISSLER OLDS & LOWE All Rights Reserved.</span>
            {credits && (<span><a href="https://www.flaticon.com/free-icons/project" style={{ color: 'white', textDecoration: 'none' }} title="project icons">Project icons created by surang - Flaticon</a></span>)}
            <span>Website by Minty Web Designs</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
