import React from 'react';
import classes from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={classes.ProgressBarContainer}>
      <div className={classes.ProgressBar}></div>
    </div>
  );
};

export default ProgressBar;
