import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;
  
  return (
    <div className="quiz-progress">
      <h3>Question <span>{current}</span>/<span>{total}</span></h3>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;