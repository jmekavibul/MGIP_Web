import React, { useRef, useState } from 'react';
import HeroSlider, { Slide, Nav } from 'hero-slider';
import dc from '../../pictures/dc.webp';
import uspto from '../../pictures/uspto.webp';
import washingtonWhite from '../../pictures/washington_white.jpg';
import 'hero-slider/dist/index.css';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Wrapper from '../Wrapper/Wrapper';
import RotatingText from '../RotatingText/RotatingText';
import ProgressBar from '../ProgressBar/ProgressBar'; // Import the ProgressBar component
import './MyHeroSlider.css';

const MyHeroSlider = () => {
  const goToNextSlideRef = useRef(null);
  const goToPreviousSlideRef = useRef(null);
  const slideDuration = 10000; // Duration of each slide in milliseconds
  const handleScrollDown = () => {
    const scrollElement = document.querySelector('body');
    if (scrollElement) {
      const currentScrollY = scrollElement.scrollTop;
      const targetScrollPosition = currentScrollY + window.innerHeight * 1;
      scrollElement.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth',
      });
    } else {
      console.error('Scroll element not found');
    }
  };
  return (
    <div className="hero-slider-container">
      <HeroSlider
        className="hero-slider"
        height="100vh"
        autoplay={{
          autoplayDuration: slideDuration,
          autoplayDebounce: 3500,
        }}
        controller={{
          initialSlide: 0, // Start with the first slide
          slidingDuration: 1000,
          slidingDelay: 100,
          goToNextSlidePointer: goToNextSlideRef,
          goToPreviousSlidePointer: goToPreviousSlideRef,
        }}
        accessibility={{
          orientation: 'horizontal',
          shouldDisplayButtons: false,
        }}
        animations={{
          slidingAnimation: 'fade',
        }}
      >
        <Slide
          label="Alexandria"
          shouldRenderMask={false}
          background={{
            backgroundImageSrc: washingtonWhite,
            backgroundAnimation: 'zoom',
          }}
        >
          <Wrapper>
            <Title>Intellectual Property Law</Title>
            <ProgressBar duration={slideDuration} />
            <Subtitle>Specializes in <RotatingText /></Subtitle>
          </Wrapper>
        </Slide>
        <Slide
          label="Washington, D.C."
          background={{
            backgroundImageSrc: dc,
            backgroundAnimation: 'zoom',
          }}
        >
          <Wrapper>
            <Title>Intellectual Property Law</Title>
            <ProgressBar duration={slideDuration} />
            <Subtitle>Specializes in <RotatingText /></Subtitle>
          </Wrapper>
        </Slide>
        <Slide
          label="USPTO"
          background={{
            backgroundImageSrc: uspto,
            backgroundAnimation: 'zoom',
          }}
        >
          <Wrapper>
            <Title>Intellectual Property Law</Title>
            <ProgressBar duration={slideDuration}  />
            <Subtitle>Specializes in <RotatingText /></Subtitle>
          </Wrapper>
        </Slide>
        <Nav />
      </HeroSlider>
      <button className="scroll-button" onClick={handleScrollDown}>
        <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M4 8L12 16L20 8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
        </button>
    </div>
  );
};

export default MyHeroSlider;
