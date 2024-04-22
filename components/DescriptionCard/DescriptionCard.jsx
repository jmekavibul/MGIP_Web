import React, { useEffect, useRef } from 'react';
import './DescriptionCard.css';

const DescriptionCard = ({ title, description, picture }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            obs.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } // Triggers when 50% of the target is visible
    );
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="card-container">
      <div ref={textRef} className="text-section">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>OUR APPROACH</button>
      </div>
      <div ref={imageRef} className="image-section">
        <img src={picture} alt={title} />
      </div>
    </div>
  );
};

export default DescriptionCard;
