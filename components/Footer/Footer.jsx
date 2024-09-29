import React from 'react';
import './Footer.css'; // Ensure CSS is linked
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import map from "../../pictures/mgipMap.jpg";
import { useNavigate } from 'react-router-dom';

const Footer = ({ credits }) => {
  const currentYear = new Date().getFullYear(); // Gets the current year
  const routeChange = (event) => {
    event.preventDefault();
    // Directly navigate to the external Google Maps link
    window.location.href = "https://www.google.com/maps/place/Muncy,+Geissler,+Olds+%26+Lowe,+P.C./@38.8026719,-77.0503829,15z/data=!4m6!3m5!1s0x89b64f449e66970f:0x112d2d84c8d832f5!8m2!3d38.803901!4d-77.0440046!16s%2Fg%2F11bbx01Iw8?entry=ttu";
  };
  return (
    <>
      <div style={{ width: '100%', height: '20px', backgroundColor: "#6C8EAD" }} />
      <div className='footer-container'>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section company-info">
            <h3 className="footer-title">MUNCY, GEISSLER, <br /> OLDS & LOWE, P.C.</h3>
            <img src={map} onClick={routeChange} className="footer-map"/>
            </div>
            <div className='link-parent'>
              <div className="footer-section quick-links">
                <h4 style={{ marginBottom: '0px' }}>QUICK LINKS</h4>
                <ul style={{ marginTop: '10px' }}>
                  <li><a href="/">About</a></li>
                  <li><a href="/careers">Careers</a></li>
                  <li><a href="/team">Team</a></li>
                  <li><a href="/contact">Contact us</a></li>
                  <li><a href="/disclaimer">Disclaimer</a></li>
                </ul>
              </div>
              <div className="footer-section contact-info">
                <h4 style={{ marginBottom: '0px' }}>GET IN TOUCH</h4>
                <div style={{ marginTop: '10px', display: 'inline', lineHeight:'25px', alignItems: 'center'}}>
                    <a>125 S Royal St</a><br />
                    <a>Alexandria, VA 22314</a><br />
                    <div style={{paddingTop:'10px', display: 'grid'}}>
                        <a>+1(703)621-7140</a>
                        <a>mailroom@mg-ip.com</a>
                    </div>
                    <div className="social-icons" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <a href="https://www.linkedin.com/company/muncy-geissler-olds-&-lowe/" className="icon-button">
                      <FaLinkedin size={20} color="white" />
                    </a>
                    <a href="/contact" className="icon-button">
                      <IoMdMail size={20} color="white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-credits">
            <span>© {currentYear} MG-IP Law. All Rights Reserved</span>
            {credits && (<span><a href="https://www.flaticon.com/free-icons/project" style={{ color: 'white', textDecoration: 'none' }} title="project icons">Project icons created by surang - Flaticon</a></span>)}
            <span>Website by JSP Webs LLC</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
