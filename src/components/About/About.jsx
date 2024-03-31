import React, { useState, useEffect, useRef } from 'react';

import alexandria from '../../assets/alexandria.jpg';
import uspto from '../../assets/uspto.jpg';
import dc from '../../assets/dc.jpg'; // Ensure this is imported correctly
import './About.css';
import { PopUp } from '../PopUp/PopUp'
import { ContentBox } from '../ContentBox/ContentBox';
import InfoSection from '../InfoSection/InfoSection';

export const About = () => {
  const [backgroundCount, setBackGroundCount] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false); // New state to track user interaction
  const presentData = [
    { text1: "Innovative. Integrated. ", text2: "World-class regulatory, litigation and transactional solutions for your most complex challenges.", img: dc },
    { text1: "Innovative. Integrated.", text2: "World-class regulatory, litigation and transactional solutions for your most complex challenges.", img: uspto },
    { text1: "Innovative. Integrated.", text2: "World-class regulatory, litigation and transactional solutions for your most complex challenges.", img:  alexandria}
  ];
  
  useEffect(() => {
    // Only set up the interval if the user has not interacted with the dots
    if (!isUserInteracted) {
      const intervalId = setInterval(() => {
        setBackGroundCount(prevCount => (prevCount + 1) % presentData.length); // Cycle through 3 images
      }, 4500); // Change image every 4.5 seconds

      return () => clearInterval(intervalId);
    }
  }, [isUserInteracted]); // Depend on the isUserInteracted state



  const handleDotClick = (index) => {
    setBackGroundCount(index);
    setIsUserInteracted(true); // Stop the automatic rotation
  };

  return (
    <div className='about'>
        {presentData.map((item, index) => (
            <div key={index} className={`background ${backgroundCount === index ? 'visible' : ''}`} style={{ backgroundImage: `url(${item.img})` }}>
            <div className={`hero-text ${backgroundCount === index ? 'visible' : ''}`}>
                <p style={{fontSize:" 35px", fontWeight: "450"}}>{item.text1}</p>
                <p style={{fontSize:" 20px", fontWeight: "350"}}>{item.text2}</p>
            </div>
            </div>
        ))}

        <div className='hero-dot-play'>
            <ul className='hero-dots'>
            {presentData.map((_, index) => (
                <li key={index} onClick={() => handleDotClick(index)} className={backgroundCount === index ? "hero-dot orange" : "hero-dot"}></li>
            ))}
            </ul>
        </div>
        <div className='infoSection'>
        
        <InfoSection/>
      </div>
    </div>
  );
};