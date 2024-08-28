import React from 'react';
import styles from './TransactionProfile.module.css';

const TransactionProfile = ({ data }) => {
  return (
    <div className={styles.transactionProfile}>
      <h2 className={styles.transactionProfileTitle}>Our Services</h2>
      <div className={styles.gridContainer}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.gridItem}
            style={{
              backgroundColor: item.color,
            }}
          >
            <div className={styles.iconWrapper}>
              <img src={item.icon} alt={item.title} className={styles.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionProfile;
