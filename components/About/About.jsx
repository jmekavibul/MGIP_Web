import React, { useState, useEffect } from 'react';
import './About.css';
import Hero from '../Hero/Hero'; // Ensure you have the correct path to the Hero component
import InfoSection from '../InfoSection/InfoSection';
import dc from '../../pictures/dc.jpg'
import alexandria from '../../pictures/alexandria.jpg'
import uspto from '../../pictures/uspto.jpg'

export const About = () => {
    const [backgroundCount, setBackgroundCount] = useState(0);
    const [isUserInteracted, setIsUserInteracted] = useState(false);
    const presentData = [
      { text1: "Innovative. Integrated.", text2: "World-class regulatory, litigation and transactional solutions for your most complex challenges.", url: dc },
      { text1: "Innovative. Integrated.", text2: "World-class regulatory, litigation and transactional solutions for your most complex challenges.", url: alexandria },
      { text1: "Innovative. Integrated.", text2: "World-class regulatory, litigation and transactional solutions for your most complex challenges.", url: uspto }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!isUserInteracted) {
          setBackgroundCount((prevCount) => (prevCount + 1) % presentData.length);
        }
      }, 4500);
      return () => clearInterval(interval);
    }, [backgroundCount, isUserInteracted, presentData.length]);
  
    const handleHeroClick = (index) => {
      setIsUserInteracted(true);
      setBackgroundCount(index);
    };
  
    return (
      <div className='about'>
        <Hero
          images={presentData}
          backgroundIndex={backgroundCount}
          handleHeroClick={handleHeroClick}
          height={'70vh'}
        />
  
        <div className='infoSectionWrapper'>
          <InfoSection />
        </div>
      </div>
    );
  };

export default About;
