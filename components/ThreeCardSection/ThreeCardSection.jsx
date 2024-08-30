import React, { useState } from 'react';
import styles from './ThreeCardSection.module.css';

const ThreeCardSection = ({ cards, colors, iconBackgroundColor }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleShowMoreClick = (index) => {
    setActiveCard({
      ...cards[index],
      backgroundColor: colors[index % colors.length],
    });
  };

  const handleClose = () => {
    setActiveCard(null);
  };

  return (
    <div className={styles.threeCardSection}>
      <h2 className={styles.sectionTitle}>Services</h2>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            {card.icon && (
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: iconBackgroundColor[index % iconBackgroundColor.length] }}
              >
                {React.createElement(card.icon, { size: 50, color: '#ffffff' })}
              </div>
            )}
            {card.title && <h3 className={styles.cardTitle}>{card.title}</h3>}
            {card.description && <p className={styles.cardDescription}>{card.description}</p>}
            {card.linkText && (
              <a
                href="#"
                className={styles.learnMore}
                onClick={(e) => {
                  e.preventDefault();
                  handleShowMoreClick(index);
                }}
              >
                {card.linkText}
              </a>
            )}
          </div>
        ))}
      </div>

      {activeCard && (
        <div className={styles.overlay}>
          <div
            className={styles.overlayCard}
            style={{ backgroundColor: activeCard.backgroundColor }}
          >
            <button className={styles.closeButton} onClick={handleClose}>
              ×
            </button>
            <div className={styles.cardDescription}>
              {activeCard.moreText.split(/(?<=\.)\s+/).map((sentence, index) => {
                const [beforeColon, afterColon] = sentence.split(/:\s*/);
                return (
                  <p key={index}>
                    <strong>{beforeColon}{afterColon ? ':' : ''}</strong>{afterColon ? ` ${afterColon}` : ''}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeCardSection;
