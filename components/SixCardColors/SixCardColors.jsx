import React from 'react';
import styles from './SixCardColors.module.css';

const SixCardColors = ({ data, colors }) => {
  return (
    <div className={styles.sixCardColors}>
      <h2>Transaction Profile</h2>
      <div className={styles.gridContainer}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.gridItem}
            style={{
              backgroundColor: colors[index % colors.length],
            }}
          >
            {item.icon && (
              <div className={styles.iconWrapper}>
                {React.createElement(item.icon, { size: 50 })}
              </div>
            )}
            {item.title && <h3>{item.title}</h3>}
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixCardColors;
