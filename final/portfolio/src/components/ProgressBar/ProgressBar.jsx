import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progressPercentage, color }) => {
  return (
    <div className="progress-bar">
      <div
        className="bar"
        style={{
        }}
      ></div>
      <div
        className="progress"
        style={{
          width: `${progressPercentage}%`,
          height: "100%",
          backgroundColor: color
        }}
      >
      </div>
    </div >
  );
}

export default ProgressBar;
