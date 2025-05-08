import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const handleStartQuiz = () => {
    if (currentUser) {
      //navigate('/levels');
      navigate('/generate-quiz')

    } else {
      navigate('/login');
    }
  };
  
  return (
    <div className="home-screen screen">
      <h1>Patient Education Quiz</h1>
      <p className="home-description">
        Instead of reading long discharge instructions, learn how to care for your health through short, engaging quizzes.
      </p>
      <div className="features-container">
        <div className="feature">
          <h3>📚 Practical Knowledge</h3>
          <p>Cover topics like disease basics, medications, lifestyle, and preventing complications.</p>
        </div>
        <div className="feature">
          <h3>🕹️ Gamified Learning</h3>
          <p>Answer interactive questions, unlock levels, and get instant feedback on your responses.</p>
        </div>
        <div className="feature">
          <h3>👨‍⚕️ Patient-Centered</h3>
          <p>Designed for patients recovering in the hospital or preparing for discharge.</p>
        </div>
      </div>
      <button 
        className="btn start-btn" 
        onClick={handleStartQuiz}
      >
        {currentUser ? 'Start Learning' : 'Login to Start'}
      </button>
    </div>
  );
};

export default Home;