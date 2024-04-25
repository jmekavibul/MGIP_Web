import React, { useState, useEffect } from 'react';

import alexandria from '../../pictures/alexandria.jpg';
import uspto from '../../pictures/uspto.jpg';
import dc from '../../pictures/dc.jpg';
import './About.css';
import InfoSection from '../InfoSection/InfoSection';
import Awards from '../Awards/Awards';
import TimeLine from '../TimeLine/TimeLine';
import building from '../../pictures/building.png';
import lawyer from '../../pictures/lawyer.png';
import city from '../../pictures/city.png';

export const About = () => {
  const [backgroundCount, setBackGroundCount] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const presentData = [
    { text1: "Innovative. Integrated.", text2: "World-class regulatory, litigation and transactional solutions for your most complex challenges.", img: dc },
    { text1: "Innovative. Integrated.", text2: "World-class regulatory, litigation and transactional solutions for your most complex challenges.", img:  alexandria},
    { text1: "Innovative. Integrated.", text2: "World-class regulatory, litigation and transactional solutions for your most complex challenges.", img: uspto }
  ];

  const resetProgressBars = () => {
    document.querySelectorAll('.hero-bar').forEach(bar => {
      bar.style.width = '0%';
      bar.style.transition = 'none';
    });
  };

  const startProgressBar = (index) => {
    resetProgressBars();
    const bar = document.querySelector(`.hero-bar[data-index="${index}"]`);
    if (bar) {
      // This forces the browser to repaint which ensures the transition will start from 0% width
      bar.offsetWidth;
      bar.style.transition = 'width 4.5s linear';
      bar.style.width = '100%';
    }
  };

  useEffect(() => {
    if (!isUserInteracted) {
      const intervalId = setInterval(() => {
        setBackGroundCount((prevCount) => (prevCount + 1) % presentData.length);
      }, 4500);

      // Start the progress bar for the initial image
      startProgressBar(backgroundCount);

      return () => clearInterval(intervalId);
    }
  }, [backgroundCount, isUserInteracted, presentData.length]);

  const handleBarClick = (index) => {
    if (!isUserInteracted || backgroundCount !== index) {
      setBackGroundCount(index);
      setIsUserInteracted(true);
      // Start the progress bar for the clicked index
      startProgressBar(index);
    }
  };
  const stepsData = [
    { title: 'founded the firm', time: '2006', picture: building },
    { title: 'expended team to 6', time: '2007', picture: lawyer },
    { title: 'moved to fairfax', time: '2008', picture: city },
    // ... add more steps as needed
  ];
  return (
    <div className='about'>
      {presentData.map((item, index) => (
        <div key={index} className={`background ${backgroundCount === index ? 'visible' : ''}`} style={{ backgroundImage: `url(${item.img})` }}>
          <div className={`hero-text ${backgroundCount === index ? 'visible' : ''}`}>
            <div className='hero-header'>
              <p>{item.text1}</p>
            </div>
            <div className='hero-content'>
              <p>{item.text2}</p>
            </div>
          </div>
        </div>
      ))}

      <div className='hero-bar-play'>
        {presentData.map((_, index) => (
          <div key={index} className="hero-bar-container" onClick={() => handleBarClick(index)}>
            <div className={`hero-bar`} data-index={index} style={{ width: backgroundCount === index ? '100%' : '0%' }}></div>
          </div>
        ))}
      </div>

      <div className='infoSection'>
        <InfoSection />
      </div>

      <TimeLine steps={stepsData} />
    </div>
  );
};

export default About;
