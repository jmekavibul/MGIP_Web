import React from 'react';
import './TimeLine.css'; // Ensure you create this CSS file
import { IoAccessibilityOutline } from "react-icons/io5";

const TimeLineStep = ({ title, time, icon, isLast }) => (
  <div className={`timeLine-step ${isLast ? '' : 'timeLine-step-with-connector'}`}>
    <div className="timeLine-icon-and-Line">
      <img src={icon}  className="timeLine-icon" />
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
        icon={step.picture}
        isLast={index === steps.length - 1}

      ></TimeLineStep>
      
    ))}
  </div>
);

export default TimeLine;
