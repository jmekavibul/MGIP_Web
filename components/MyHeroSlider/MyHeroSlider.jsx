import React, { useRef } from 'react';
import HeroSlider, { Slide, Nav } from 'hero-slider';
import dc from '../../pictures/dc.webp';
import uspto from '../../pictures/uspto.webp';
import washingtonWhite from '../../pictures/washington_white.jpg';
import 'hero-slider/dist/index.css';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Wrapper from '../Wrapper/Wrapper';
import RotatingText from '../RotatingText/RotatingText';
import ProgressBar from '../ProgressBar/ProgressBar'; 
import './MyHeroSlider.css';
import Timeline from '../Timeline/Timeline'; // Import the Timeline component

const MyHeroSlider = () => {
  const goToNextSlideRef = useRef(null);
  const goToPreviousSlideRef = useRef(null);
  const slideDuration = 1000000; // Duration of each slide in milliseconds
  const timelineData = [
    {
      year: "2016",
      events: [
        "Number of employees: 65"
      ]
    },
    {
      year: "2015",
      events: ["Number of employees: 58"]
    },
    {
      year: "2014",
      events: ["Number of employees: 51"]
    },
    {
      year: "2013",
      events: [
        "Daniel Podhajny as Principal partner.",
        "Number of employees: 43"
      ]
    },
    {
      year: "2012",
      events: ["Number of employees: 34"]
    },
    {
      year: "2011",
      events: ["Number of employees: 29"]
    },
    {
      year: "2010",
      events: [
        "John L. Ciccozzi joined the firm.",
        "Number of employees: 25"
      ]
    },
    {
      year: "2009",
      events: ["Number of employees: 23"]
    },
    {
      year: "2008",
      events: [
        "Joe M. ('Ken') Muncy joined the firm.",
        "The firm moved the office to 4000 Legato Road in Fairfax County.",
        "Number of employees: 16"
      ]
    },
    {
      year: "2007",
      events: [
        "Daniel Podhajny joined the firm.",
        "Number of employees: 6"
      ]
    },
    {
      year: "2006",
      events: [
        "Scott L. Lowe joined the firm.",
        "The firm moved the office to Main Street in Fairfax City.",
        "Martin R. Geissler and Mark E. Olds founded the firm."
      ]
    }
  ];

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
          slidingDuration: 800,
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
            <Title>MUNCY, GEISSLER, OLDS & LOWE, P.C. 
            <p>Intellectual Property Law</p></Title>
            
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
            <Title>MUNCY, GEISSLER, OLDS & LOWE, P.C. 
            <p>Intellectual Property Law</p></Title>
            
            <ProgressBar duration={slideDuration} />
            <Timeline data={timelineData} />
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
            <Title>MUNCY, GEISSLER, OLDS & LOWE, P.C. 
            <p>Intellectual Property Law</p></Title>
            <ProgressBar duration={slideDuration} />
            <Subtitle>Located 10 minutes from USPTO</Subtitle>
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
