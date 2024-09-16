import React, { useRef } from 'react';
import HeroSlider, { Slide, Nav, Overlay } from 'hero-slider';
import dc from '../../pictures/dc.webp';
import alexandria from '../../pictures/monument.jpg';
import uspto from '../../pictures/uspto.webp';
import 'hero-slider/dist/index.css';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Wrapper from '../Wrapper/Wrapper';
import washingtonWhite from '../../pictures/washington_white.jpg';
import './MyHeroSlider.css';
import RotatingText from '../RotatingText/RotatingText';
const MyHeroSlider = () => {
  const goToNextSlideRef = useRef(null);
  const goToPreviousSlideRef = useRef(null);

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
          autoplayDuration: 10000,
          autoplayDebounce: 4000,
        }}
        controller={{
          initialSlide: 1,
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
            <Title>Specializes in <RotatingText /></Title>
            <Subtitle>Jefferson Memorial, Washington D.C.</Subtitle>
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
            <Title>Specializes in <RotatingText /></Title>
            <Subtitle>Washington Monument, Washington D.C.</Subtitle>
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
            <Title>Specializes in <RotatingText /></Title>
            <Subtitle>USPTO Office, Alexandria Virginia</Subtitle>
          </Wrapper>
        </Slide>
        <Nav />
      </HeroSlider>
      <button className="scroll-button" onClick={handleScrollDown}></button>
    </div>
  );
};

export default MyHeroSlider;
