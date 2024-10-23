import React, { useRef } from 'react';
import './About.css';

import Hero from '../Hero/Hero';
import InfoSection from '../InfoSection/InfoSection';
import CustomizedSteppers from '../Stepper/Stepper';

export const About = () => {
  // Create a reference for InfoSection
  const infoSectionRef = useRef(null);

  // Function to handle scroll to InfoSection
  const scrollToInfoSection = () => {
    infoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden">
      {/* Pass scroll function to Hero */}
      <Hero onLearnMoreClick={scrollToInfoSection} />
      <div ref={infoSectionRef}>
        <InfoSection />
      </div>
    </div>
  );
};

export default About;
