import React from 'react';
import './Awards.css'; // Ensure this CSS file has the styles we discussed
import TimeLine from '../TimeLine/TimeLine';
import { useEffect } from 'react';
import DescriptionCard from '../DescriptionCard/DescriptionCard';
import dcard from '../../pictures/descriptioncard.jpg';
import building from '../../pictures/building.png';
import lawyer from '../../pictures/lawyer.png';
import city from '../../pictures/city.png';
const AwardCard = ({ number, description, logo }) => (
  <div className="award-card">
    <div className="award-number">{number}</div>
    <div className="award-description">{description}</div>
  </div>
);


const Awards = () => {
  const awardsData = [
    { number: '1500+', description: 'Trademark registrations 2023' },
    { number: '1700+', description: 'Patent registrations 2023' },
    { number: '4+', description: 'Countries of clients' },
    { number: '>8m', description: 'To USPTO office'},
    { number: '1st, 1st', description: '2023 US Trademark, 2022 US Trademark'},
    { number: 'Top 10', description: '2023 US Patent, 2022 US Patent'},
  ];
  const stepsData = [
    { title: 'founded the firm', time: '2006', picture: building },
    { title: 'expended team to 6', time: '2007', picture: lawyer },
    { title: 'moved to fairfax', time: '2008', picture: city },
    // ... add more steps as needed
  ];
  const info = {
    title: 'Client Counseling for IP law',
    description: 'We provide legal services to large domestic and foreign corporations and to a wide range of mid-sized and start-up organizations. Our technical, business, and legal experience allows us to assist our clients in obtaining protection for their intellectual property in an efficient and cost-effective manner.',
    picture: dcard // Replace with your image path
  };
  useEffect(() => {
    const parallaxStartScrollY = 750;
    const background = document.querySelector('.background-image');
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (background) {
        if (currentScrollY > parallaxStartScrollY) {
          // Apply parallax effect only when scrolling down past the threshold
          const offset = currentScrollY - parallaxStartScrollY;
          const parallaxSpeed = 0.5;
          background.style.transform = `translateY(${offset * parallaxSpeed}px)`;
        } else {
          // Keep background position fixed when above the threshold
          background.style.transform = 'translateY(0px)';
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  return (
    <div className="awards-container">
        <div className="background-image"></div> 
      <div className="awards-grid">
        {awardsData.map((award, index) => (
          <AwardCard key={index} {...award} />
        ))}
      </div>
      
      <DescriptionCard title={info.title} description={info.description} picture={info.picture}></DescriptionCard>

      <TimeLine steps={stepsData}/>
    </div>
  );
};

export default Awards;
