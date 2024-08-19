import React from 'react';
import styles from './ThreeCardSection.module.css';

const ThreeCardSection = ({ cards, colors, iconBackgroundColor }) => {
  return (
    <div className={styles.threeCardSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
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
            {card.linkText && <a href="#" className={styles.learnMore}>{card.linkText}</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeCardSection;
