import React, { useState, useEffect, useRef } from 'react';
import './InfoSection.css';
import { PopUp } from '../PopUp/PopUp';
import { ContentBox } from '../ContentBox/ContentBox';
import Awards from '../Awards/Awards';
import ImgMediaCard from '../ImgMediaCard/ImgMediaCard';
import patent from '../../pictures/patent.webp';
import trademark from '../../pictures/trademark.webp';
import copyright from '../../pictures/copyright.webp';

const InfoSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.25,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="info-section">
            <div className="service-section">
                <div className="services-header">
                    <h2>Firm Highlight</h2>
                </div>

                <Awards />
                <div className="services-header2">
                    <svg className="line-animation" width="100%" height="2">
                        <rect x="50%" width="0" height="100%" fill="#839ebd"></rect>
                    </svg>
                    <h2 className="services-title">Our Service</h2>
                </div>
                <div ref={sectionRef} className={`service-points ${isVisible ? 'visible' : ''}`}>
                    <div className="content-box-wrapper">
                        <ImgMediaCard Title="Patent" Content="We offer comprehensive patent services, including application filing, prosecution, and portfolio management. Our team ensures your innovations are protected and your intellectual property rights are enforced globally." imgSrc={patent}/>
                        
                    </div>
                    <div className="content-box-wrapper">
                        <ImgMediaCard Title="Trademark" Content="Our trademark services cover registration, monitoring, and enforcement. We help you establish and protect your brand identity, ensuring your trademarks are secure and recognized in the marketplace." imgSrc={trademark}/>
                    </div>
                    <div className="content-box-wrapper">
                        <ImgMediaCard Title="Copyright" Content="We provide full copyright services, from registration to enforcement. Our experts safeguard your creative works, ensuring your intellectual property rights are upheld and protected against infringement." imgSrc={copyright}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
