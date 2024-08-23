import React from 'react';
import './About.css';
import MyHeroSlider from '../MyHeroSlider/MyHeroSlider';
import ButtonCard from '../ButtonCard/ButtonCard';
import SixCardColors from '../SixCardColors/SixCardColors';
import ThreeCardSection from '../ThreeCardSection/ThreeCardSection';
import { FaGlobe, FaMapMarkerAlt, FaGavel, FaShieldAlt, FaBriefcase, FaLanguage, FaFileSignature, FaTrademark, FaCopyright } from 'react-icons/fa';

export const About = () => {
  const transactionData = [
    {
      description: "Serve major corporations and mid-sized enterprises domestically and internationally.",
      icon: FaGlobe,
    },
    {
      description: "Situated in the DC metro area just a few minutes away from the USPTO.",
      icon: FaMapMarkerAlt,
    },
    {
      description: "Attorneys with science or technical backgrounds and prior experience as USPTO patent examiners.",
      icon: FaGavel,
    },
    {
      description: "Deliver superior quality work efficiently and cost-effectively.",
      icon: FaBriefcase,
    },
    {
      description: "Secure intellectual property protection efficiently and cost-effectively.",
      icon: FaShieldAlt,
    },
    {
      description: "Proficient in several languages to meet your global business needs.",
      icon: FaLanguage,
    },
  ];

  const serviceCards = [
    {
      title: "Patent",
      description: "We offer comprehensive patent services, including application filing, prosecution, and portfolio management. Our team ensures your innovations are protected and your intellectual property rights are enforced globally.",
      icon: FaFileSignature,
      linkText: "Learn More",
    },
    {
      title: "Trademark",
      description: "Our trademark services cover registration, monitoring, and enforcement. We help you establish and protect your brand identity, ensuring your trademarks are secure and recognized in the marketplace.",
      icon: FaTrademark,
      linkText: "Learn More",
    },
    {
      title: "Copyright",
      description: "We provide full copyright services, from registration to enforcement. Our experts safeguard your creative works, ensuring your intellectual property rights are upheld and protected against infringement.",
      icon: FaCopyright,
      linkText: "Learn More",
    },
  ];

  const serviceColors = ["#D8E8E6", "#D9E3E8", "#E5EAF0"];
  const iconBackgroundColor = ["#5B9A93", "#577C8E", "#2F4157"];

  return (
    <div className='about'>
      <MyHeroSlider/>
      <div className='infoSectionWrapper'>
        <div className="background-image2"></div>
        <div className='buttonCard'>
          <ButtonCard
            backgroundColor="transparent"
            title="Client Counseling for IP law"
            content="Muncy, Geissler, Olds & Lowe PC is a boutique intellectual property law firm in the Washington DC metropolitan area. Founded in 2006, the firm has become a top IP law firm, serving a diverse range of domestic and international clients. Our multilingual team, with expertise in science and technology, delivers superior quality work efficiently and cost-effectively."
            buttonText=""
            borderRadius=""
            textColor="#2F4157"
          />
        </div>
        <ThreeCardSection cards={serviceCards} colors={serviceColors} iconBackgroundColor={iconBackgroundColor} />
        <SixCardColors
          data={transactionData}
          colors={["#5B9A93", "#577C8E", "#2F4157", "#577C8E", "#2F4157", "#5B9A93"]}
        />
      </div>
    </div>
  );
};

export default About;
