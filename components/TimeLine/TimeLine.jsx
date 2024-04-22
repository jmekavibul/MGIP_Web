import React from 'react';
import './TimeLine.css'; // Ensure you create this CSS file

const TimeLineStep = ({ title, time, icon, isLast }) => (
  <div className={`timeLine-step ${isLast ? '' : 'timeLine-step-with-connector'}`}>
    <div className="timeLine-icon-and-Line">
      <img src={icon} alt={title} className="timeLine-icon" />
      {!isLast && <div className="timeLine-Line"></div>}
    </div>
    <div className="timeLine-info">
      <div className="timeLine-title">{title}</div>
      <div className="timeLine-time">{time}</div>
    </div>
  </div>
);

const TimeLine = ({ steps }) => (
  <div className="timeLine-container">
    {steps.map((step, index) => (
      <TimeLineStep
        key={index}
        title={step.title}
        time={step.time}
        icon={step.icon}
        isLast={index === steps.length - 1}
      />
    ))}
  </div>
);

export default TimeLine;
