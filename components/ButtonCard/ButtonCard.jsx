import React from 'react';
import styles from './ButtonCard.module.css';

const ButtonCard = ({ backgroundColor, title, content, buttonText, borderRadius, textColor, url, center }) => {
  return (
    <div className={styles.buttonCard} style={{ backgroundColor, borderRadius, color: textColor }}>
      <h1 className={styles.buttonTitle} style={{ color: textColor, textAlign:center ? 'center' : 'left' }}>{title}</h1>
      <p className={styles.description} style={{ color: textColor }}>{content}</p>
      {buttonText && <button className={styles.cardButton} onClick={() => window.location.href = url}>{buttonText}</button>}
    </div>
  );
};

export default ButtonCard;
