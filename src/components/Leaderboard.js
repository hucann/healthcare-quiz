import React from 'react';
import './Leaderboard.css';

// This is a placeholder component for the future Leaderboard feature
const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <p className="coming-soon">Coming Soon!</p>
      <div className="leaderboard-description">
        <p>This feature will allow you to:</p>
        <ul>
          <li>Compare your scores with other players</li>
          <li>See top performers for each level</li>
          <li>Track your ranking over time</li>
        </ul>
      </div>
      
      {/* Placeholder leaderboard UI */}
      <div className="leaderboard-placeholder">
        <div className="leaderboard-header">
          <span>Rank</span>
          <span>Player</span>
          <span>Score</span>
        </div>
        
        {[1, 2, 3].map(rank => (
          <div key={rank} className="leaderboard-row placeholder-row">
            <span className="rank">{rank}</span>
            <span className="player">Player {rank}</span>
            <span className="score">--</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;