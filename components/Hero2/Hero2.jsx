import React, { useState, useEffect } from 'react';
import './Hero2.css';

const Hero2 = ({ backgroundImage, text, height, button, subText }) => {
  // State to control animation start
  const [animate, setAnimate] = useState(false);

  // Function to handle event and start animation
  const startAnimation = () => {
    setAnimate(true);
    window.removeEventListener('mousemove', startAnimation);
    window.removeEventListener('scroll', startAnimation);
  };

  // Effect to attach event listeners
  useEffect(() => {
    window.addEventListener('mousemove', startAnimation);
    window.addEventListener('scroll', startAnimation);

    return () => {
      window.removeEventListener('mousemove', startAnimation);
      window.removeEventListener('scroll', startAnimation);
    };
  }, []);

  return (
    <div 
        className='heroContainer2'
        style={{ backgroundImage: `url(${backgroundImage})`, width:'100%', height: height }}
    >
        <h1 className={`heroText2 ${animate ? 'animate2' : ''}`}>{text}</h1>
        {subText && (
            <h2 className={`subText2 ${animate ? 'animate2' : ''}`}>{subText}</h2>
        )}
        {button && (
            <div className={`hero-button2 ${animate ? 'animate2' : ''}`}>
                <button>{button}</button>
            </div>
        )}
    </div>
  );
};

export default Hero2;
