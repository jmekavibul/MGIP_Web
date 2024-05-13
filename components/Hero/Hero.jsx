import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = ({ images, backgroundIndex, handleHeroClick, height }) => {
  // State to track loaded state of bars
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  useEffect(() => {
    // Reset all progress bars to 0 when changing images
    const updatedLoaded = [...loaded];
    updatedLoaded.fill(false);
    updatedLoaded[backgroundIndex] = true; // Start loading the current index
    setLoaded(updatedLoaded);
    
    const timeout = setTimeout(() => {
      updatedLoaded[backgroundIndex] = true;
      setLoaded(updatedLoaded);
    }, 50); // Small delay to restart animation if clicked same index

    return () => clearTimeout(timeout);
  }, [backgroundIndex, images.length]);

  const onClickBar = (index) => {
    handleHeroClick(index);
  };

  return (
    <div className='heroContainer' style={{ backgroundImage: `url(${images[backgroundIndex].url})`, height: height }}>
      <div className='heroText'>{images[backgroundIndex].text1}</div>
      <div className='heroSubText'>{images[backgroundIndex].text2}</div>
      <div className='hero-bar-play'>
        {images.map((_, index) => (
          <div key={index} className='hero-bar-container' onClick={() => onClickBar(index)}>
            <div className='hero-bar' style={{
              width: loaded[index] ? '100%' : '0%',
              transition: loaded[index] ? 'width 4.5s linear' : 'none'
            }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;