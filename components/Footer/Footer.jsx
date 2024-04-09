import React from 'react';
import './Footer.css'; // Make sure to create and link this CSS file

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/legal">Legal Policies</a>
          <a href="/rights">Statement of Client's Rights</a>
          <a href="/fees">Employment Tribunal and Immigration Fees</a>
          <a href="/employees">For Employees</a>
        </div>
        <div className="footer-subscribe">
          <button>Join Our Email List →</button>
        </div>
        <div className="footer-legal">
          <p>© MUNCY, GEISSLER OLDS & LOWE 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;