import React, { useEffect, useRef } from 'react';
import './Awards.css';
import DescriptionCard from '../DescriptionCard/DescriptionCard';

const AwardCard = React.forwardRef(({ number, description }, ref) => (
  <div className="award-card hidden" ref={ref}>
    <div className="award-number">{number}</div>
    <div className="award-description">{description}</div>
  </div>
));

const Awards = () => {
  const awardsData = [
    { number: '1500+', description: 'Trademark registrations 2023' },
    { number: '1700+', description: 'Patent registrations 2023' },
    { number: '4+', description: 'Countries of clients' },
    { number: '>8m', description: 'To USPTO office' },
    { number: '1st, 1st', description: '2023 US Trademark, 2022 US Trademark' },
    { number: 'Top 10', description: '2023 US Patent, 2022 US Patent' },
  ];

  const info = {
    title: 'Client Counseling for IP law',
    description: 'We provide legal services to large domestic and foreign corporations and to a wide range of mid-sized and start-up organizations. Our technical, business, and legal experience allows us to assist our clients in obtaining protection for their intellectual property in an efficient and cost-effective manner.',
  };

  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!wrapperRef.current) {
      console.log('Wrapper ref is not attached correctly.');
      return;
    }

    const wrapperObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('awards-Wrapper is visible');
            cardRefs.current.forEach(card => {
              if (card) {
                console.log('Adding slide-in class to', card);
                card.classList.remove('hidden');
                card.classList.add('slide-in');
              }
            });
            obs.unobserve(entry.target); // Stop observing after the wrapper is visible
          } else {
            console.log('awards-Wrapper is not visible');
          }
        });
      },
      { threshold: 0.5 } // Triggers when 50% of the wrapper is visible
    );

    console.log('Observing wrapper:', wrapperRef.current);
    wrapperObserver.observe(wrapperRef.current);

    return () => {
      console.log('Disconnecting observer');
      wrapperObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const parallaxStartScrollY = window.innerWidth < 500 ? 400 : 750;
    const background = document.querySelector('.background-image');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (background) {
        if (currentScrollY > parallaxStartScrollY) {
          const offset = currentScrollY - parallaxStartScrollY;
          const parallaxSpeed = 0.5; // Faster speed for smaller screens
          background.style.transform = `translateY(${offset * parallaxSpeed}px)`;
        } else {
          background.style.transform = 'translateY(0px)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="awards-container">
      <div className="background-image"></div>
      <DescriptionCard
        title={info.title}
        description={info.description}
        gridItems={[
          'We counsel U.S. and international clients.',
          'We counsel clients on all Patent, Trademark.',
          'We protect clients for their intellectual property',
          'We provide service in multiple languages',
          'Attorneys with science and technical background',
          'Located in the DC metro area, 8 minutes from USPTO',
        ]}
      />
      <div className="awards-Wrapper" ref={wrapperRef}>
        <div className="awards-grid">
          {awardsData.map((award, index) => (
            <AwardCard
              key={index}
              number={award.number}
              description={award.description}
              ref={el => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
