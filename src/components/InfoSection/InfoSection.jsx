import React from 'react';
import './InfoSection.css'; // Ensure you have created this CSS file

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="services-section">
        <div className="services-header">
          <h2>Services</h2>
          <a href="/services" className="all-services">See all services</a>
        </div>
        <div className="service-points">
          {/* Repeat structure for each service point */}
          <div className="service-point">
            <h3>Patent</h3>
            <p>Strategic advisors to the world’s greatest thinkers, makers, and doers.</p>
            <a href="/services/patent">View service →</a>
          </div>
          {/* ... */}
          <div className="service-point">
            <h3>Patent</h3>
            <p>Strategic advisors to the world’s greatest thinkers, makers, and doers.</p>
            <a href="/services/patent">View service →</a>
          </div>
          <div className="service-point">
            <h3>Patent</h3>
            <p>Strategic advisors to the world’s greatest thinkers, makers, and doers.</p>
            <a href="/services/patent">View service →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
