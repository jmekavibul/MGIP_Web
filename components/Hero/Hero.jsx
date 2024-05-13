import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = ({ images, backgroundIndex, handleHeroClick, height }) => {
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Function to preload images
  const preloadImages = () => {
    const imageObjects = images.map(image => {
      const img = new Image();
      img.src = image.url;
      return new Promise((resolve) => {
        img.onload = () => resolve();
      });
    });
    Promise.all(imageObjects).then(() => setAllImagesLoaded(true));
  };

  useEffect(() => {
    preloadImages();
  }, [images]);

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
