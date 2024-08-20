import React from 'react';
import styles from './ButtonCard.module.css';

const ButtonCard = ({ backgroundColor, title, content, buttonText, borderRadius, textColor }) => {
  return (
    <div className={styles.buttonCard} style={{ backgroundColor, borderRadius, color: textColor }}>
      <h1 className={styles.buttonTitle} style={{ color: textColor }}>{title}</h1>
      <p className={styles.description} style={{ color: textColor }}>{content}</p>
      {buttonText && <button className={styles.cardButton}>{buttonText}</button>}
    </div>
  );
};

export default ButtonCard;