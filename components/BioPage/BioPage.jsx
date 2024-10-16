import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa'; // Import icons from react-icons
import styles from './BioPage.module.css'; // Importing the CSS module
import { GradientBackground } from '../Gradient/Gradient';
import { NavBar } from '../NavBar/NavBar';
import { Container } from '../Container/Container';

const BioPage = ({ member, membershipsData }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1400);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const capitalizeTitle = (title) => {
    return title
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  let index = 0; // Initialize index for alternating colors

  const renderMemberships = (memberships) => {
    return (
      <div className={styles.membershipContainer}>
        {memberships.map((membership, idx) => (
          <div key={idx} className={styles.membershipButton} style={{ position: 'relative' }}>
            {membership}
            {membershipsData[membership] && isLargeScreen && (
              <div className={styles.tooltip}>
                <strong>{membershipsData[membership].name}</strong>
                <p>{membershipsData[membership].description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderSection = (title, data) => {
    if (!data || data.length === 0) return null;

    const backgroundColor = index % 2 === 0 ? '#C7D9E5' : '#FFFFFF'; // Alternate colors
    index++; // Increment index only if the section is rendered

    return (
      <div className={styles.card} key={title} style={{ backgroundColor }}>
        <h3 className={styles.bioCardTitle}>{capitalizeTitle(title)}</h3>
        <div className={styles.cardContent}>
          {title === 'Memberships' ? (
            renderMemberships(data) /* Special rendering for memberships */
          ) : Array.isArray(data) ? (
            <ul>
              {data.map((item, idx) => (
                item.length > 100 ? (
                  <p key={idx}>{item}</p> /* Render longer text blocks as paragraphs */
                ) : (
                  <li key={idx}>{item}</li> /* Render shorter items as list items */
                )
              ))}
            </ul>
          ) : (
            <p>{data}</p> /* Handle single string values */
          )}
        </div>
      </div>
    );
  };

  const renderAdditionalSections = () => {
    const prioritizedKeys = ['bar', 'education', 'memberships'];
    return Object.keys(member)
      .filter(key => Array.isArray(member[key]) && !prioritizedKeys.includes(key))
      .map((key) => {
        const title = key.replace(/([A-Z])/g, ' $1').toUpperCase();
        return renderSection(title, member[key]);
      });
  };

  return (
    <div>
                <GradientBackground />
        <Container>
            <NavBar />
        </Container>
            <div className={styles.bioFullPage}>
      <div className={styles.bioContainer}>
        {/* Left Column - Photo */}
        <div className={styles.photoContainer}>
          <img src={member.photo} alt={member.name} className={styles.memberPhoto} />
        </div>

        {/* Right Column - Content */}
        <div className={styles.contentContainer}>
          {/* Header Section */}
          <div className={styles.header}>
            <div className={styles.headerText}>
              <h1 className={styles.bioName}>{member.name}</h1>
              <h2 className={styles.bioTitle}>{member.title}</h2>
            </div>
            <div className={styles.headerContact}>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <span>{member.email}</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.icon} />
                <span>{member.phone}</span>
              </div>
              <div className={styles.contactItem}>
                <FaGlobe className={styles.icon} />
                <span>{member.language || 'ENGLISH'}</span>
              </div>
            </div>
          </div>

          {/* Render fixed order sections with alternating colors */}
          {renderSection('Bar Admissions', member.bar)}
          {renderSection('Education', member.education)}
          {renderSection('Memberships', member.memberships)}

          {/* Dynamically render additional array sections with alternating colors */}
          {renderAdditionalSections()}
        </div>
      </div>
    </div>
    </div>

  );
};

export default BioPage;
