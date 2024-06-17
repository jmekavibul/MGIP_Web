import React, { useState, useEffect } from 'react';
import './About.css';
import InfoSection from '../InfoSection/InfoSection';
import MyHeroSlider from '../MyHeroSlider/MyHeroSlider';

export const About = () => {
  
    return (
      <div className='about'>
        <MyHeroSlider/>
        <div className='infoSectionWrapper'>
          <InfoSection />
        </div>
      </div>
    );
  };

export default About;
