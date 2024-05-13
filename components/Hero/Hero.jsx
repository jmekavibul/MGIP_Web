import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = ({ images, backgroundIndex, handleHeroClick, height }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  // Preloading images
  useEffect(() => {
    const imageElements = images.map(image => {
      const img = new Image();
      img.src = image.url;
      return img;
    });

    Promise.all(imageElements.map(img => new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    })))
    .then(() => {
      setImagesLoaded(true); // Images are loaded
      // Initialize the loaded states for hero bars
      const initialLoaded = Array(images.length).fill(false);
      setLoaded(initialLoaded);
    })
    .catch(error => console.error("Error loading images:", error));
  }, [images]);

  // Update loaded state for bars when background index changes
  useEffect(() => {
    if (imagesLoaded) {
      // Delay the filling of the bar to simulate a load or user interaction
      const timeoutId = setTimeout(() => {
        const updatedLoaded = [...loaded];
        updatedLoaded.fill(false);
        updatedLoaded[backgroundIndex] = true;
        setLoaded(updatedLoaded);
      }, 500); // Adjust delay as needed

      return () => clearTimeout(timeoutId); // Cleanup timeout
    }
  }, [backgroundIndex, imagesLoaded]);

  const onClickBar = (index) => {
    handleHeroClick(index);
  };

  return (
    <div className='heroContainer' style={{ backgroundImage: `url(${images[backgroundIndex].url})`, height: height }}>
      {imagesLoaded ? (
        <>
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
        </>
      ) : (
        <div>Loading...</div> // Optionally add more sophisticated loading indicators here
      )}
    </div>
  );
};

export default Hero;
