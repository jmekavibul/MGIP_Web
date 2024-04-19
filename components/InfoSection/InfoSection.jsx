import React, { useState } from 'react';
import './InfoSection.css';
import { PopUp } from '../PopUp/PopUp';
import { ContentBox } from '../ContentBox/ContentBox';

const InfoSection = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    const handleOpenPopup = (content) => () => {
        setPopupContent(content);
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="info-section">
            <div className="services-section">
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
                            <p>Protect industrial innovations for the long term with patents</p>
                        </div>} onClick={handleOpenPopup('Detail about Patent Service')}/>
                    </div>

                    <div className="content-box-wrapper">
                        <ContentBox content={<div className="service-point">
                            <h1>Design</h1>
                            <p>Safeguard unique designs in international competition</p>
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
