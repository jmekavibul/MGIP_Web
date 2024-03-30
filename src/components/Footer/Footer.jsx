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
          <a href="/alumni">Alumni</a>
          <a href="/employees">For Employees</a>
          <a href="/status">Operating Status</a>
        </div>
        <div className="footer-subscribe">
          <p>Stay up to date with the latest.</p>
          <button>Join Our Email List →</button>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com">LinkedIn</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.youtube.com">YouTube</a>
          <a href="/rss">RSS</a>
        </div>
        <div className="footer-legal">
          <p>© Arnold & Porter Kaye Scholer LLP 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;