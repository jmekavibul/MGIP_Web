import React, { useState, useEffect } from 'react';
import './About.css';
import InfoSection from '../InfoSection/InfoSection';
import MyHeroSlider from '../MyHeroSlider/MyHeroSlider';
import ButtonCard from '../ButtonCard/ButtonCard';

export const About = () => {
    
    return (
      <div className='about'>
        <MyHeroSlider/>
        <div className='infoSectionWrapper'>
        <div className="background-image2"></div>
        <div className='buttonCard'>            <ButtonCard backgroundColor="transparent" title="Client Counseling for IP law" content="Muncy, Geissler, Olds & Lowe PC is a boutique intellectual property law firm in the Washington DC metropolitan area. Founded in 2006, the firm has become a top IP law firm, serving a diverse range of domestic and international clients. Our multilingual team, with expertise in science and technology, delivers superior quality work efficiently and cost-effectively." buttonText="" borderRadius="" textColor="#36454F"/></div>

          <InfoSection />
        </div>
      </div>
    );
  };

export default About;
