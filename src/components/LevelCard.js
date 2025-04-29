import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LevelCard.css';

const LevelCard = ({ level, status, onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (status !== 'locked') {
      navigate(`/quiz/${level.id}`);
      if (onClick) onClick(level.id);
    }
  };
  
  return (
    <div 
      className={`level-card ${status}`} 
      onClick={handleClick}
    >
      <div className="level-content">
        <h3>{level.title}</h3>
        <p>{level.description}</p>
        <span className={`level-status status-${status}`}>
          {status === 'completed' ? 'Completed' : 
           status === 'unlocked' ? 'Start' : 'Locked'}
        </span>
      </div>
    </div>
  );
};

export default LevelCard;