import React from 'react';
import './Footer.css'; // Make sure to create and link this CSS file

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/disclaimer">Disclaimer</a>
        </div>

        <div className="footer-legal">
          <p>© MUNCY, GEISSLER OLDS & LOWE 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;