import React from 'react';
import PropTypes from 'prop-types';
import classes from './ProgressBar.module.css';

const ProgressBar = ({ duration }) => {
  return (
    <div className={classes.ProgressBarContainer}>
      <div
        className={classes.ProgressBar}
        style={{ animationDuration: `${duration}ms` }} // Set the animation duration
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  duration: PropTypes.number.isRequired, // Duration in milliseconds
};

export default ProgressBar;
