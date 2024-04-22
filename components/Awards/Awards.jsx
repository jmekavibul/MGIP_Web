import React from 'react';
import './Awards.css'; // Ensure this CSS file has the styles we discussed

const AwardCard = ({ number, description, logo }) => (
  <div className="award-card">
    <div className="award-number">{number}</div>
    <div className="award-description">{description}</div>
  </div>
);

const Awards = () => {
  const awardsData = [
    { number: '30+', description: 'Attorneys' },
    { number: '30', description: 'Cities Coast to Coast' },
    { number: '35+', description: 'States with ' },
    { number: '200', description: 'Strategic '},
    { number: 'BTI', description: 'Recommended '},
    { number: 'Ser', description: 'Our partnership '},
  ];

  return (
    <div className="awards-container">
      <div className="awards-grid">
        {awardsData.map((award, index) => (
          <AwardCard key={index} {...award} />
        ))}
      </div>
    </div>
  );
};

export default Awards;
