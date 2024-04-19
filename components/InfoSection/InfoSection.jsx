import React, { useState, useEffect, useRef  } from 'react';
import './InfoSection.css';
import { PopUp } from '../PopUp/PopUp';
import { ContentBox } from '../ContentBox/ContentBox';

const InfoSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Only trigger animation when the section is fully visible
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.5 // Adjust the threshold to when you want the animation to trigger
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    const handleOpenPopup = (content) => () => {
        setPopupContent(content);
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="info-section">
            <div ref={sectionRef} className={`services-section ${isVisible ? 'visible' : ''}`}>
                <div className="services-header">
                    <h2>Services</h2>
                    <a href="/services" className="all-services">See all services</a>
                </div>
                <div className="service-points">
                <div className="content-box-wrapper">
                        <ContentBox content={<div className="service-point">
                            <h1>Trade Mark</h1>
                            <p>A strong trade mark – as reliable as your good name
Trade mark protection as a guarantee for your success on the market.</p>
                        </div>} onClick={handleOpenPopup('Detail about Trade Mark Service')}/>
                    </div>
                    <div className="content-box-wrapper">
                        <ContentBox content={<div className="service-point">
                            <h1>Patent</h1>
                            <p>Protect industrial innovations - secure your innovations and creativity for the long term with patents</p>
                        </div>} onClick={handleOpenPopup('Detail about Patent Service')}/>
                    </div>

                    <div className="content-box-wrapper">
                        <ContentBox content={<div className="service-point">
                            <h1>Design</h1>
                            <p>Protect unique designs in international competitions, secure intellectual property rights</p>
                        </div>} onClick={handleOpenPopup('Detail about Design Service')}/>
                    </div>
                    {/* Add more service points as needed */}
                </div>
            </div>
            {popupOpen && (
                <PopUp content={popupContent} onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default InfoSection;
