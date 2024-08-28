import React from 'react';
import './Footer.css'; // Ensure CSS is linked
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import NewLogo from '../../pictures/Untitled-1_logo_in_white.svg'; // Update this line
const Footer = ({ credits }) => {
  const currentYear = new Date().getFullYear(); // Gets the current year

  return (
    <>
      <div style={{ width: '100%', height: '20px', backgroundColor: "#6C8EAD" }} />
      <div className='footer-container'>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section company-info">
              <img src={NewLogo} alt="Company Logo" style={{ maxWidth: '200px', height: 'auto' }} />  {/* Update src and alt */}
            </div>
            <div className='link-parent'>
              <div className="footer-section quick-links">
                <h4 style={{ marginBottom: '0px' }}>QUICK LINKS</h4>
                <ul style={{ marginTop: '10px' }}>
                  <li><a href="/approach">Approach</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/team">Team</a></li>
                </ul>
              </div>
              <div className="footer-section contact-info">
                <h4 style={{ marginBottom: '0px' }}>GET IN TOUCH</h4>
                <ul style={{ marginTop: '10px' }}>
                  <li><FaLinkedin /> <a href="https://www.linkedin.com">LinkedIn</a></li>
                  <li><IoMdMail /> <a href="mailto:info@tvdcp.com">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-credits">
            <span>© {currentYear} TVD Capital Partners LLC. All Rights Reserved</span>
            {credits && (<span><a href="https://www.flaticon.com/free-icons/project" style={{ color: 'white', textDecoration: 'none' }} title="project icons">Project icons created by surang - Flaticon</a></span>)}
            <span>Website by Minty Web Designs</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
