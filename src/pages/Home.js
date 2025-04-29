import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const handleStartQuiz = () => {
    if (currentUser) {
      navigate('/levels');
    } else {
      navigate('/login');
    }
  };
  
  return (
    <div className="home-screen screen">
      <h1>Healthcare Technology Quiz</h1>
      <p className="home-description">
        Test your knowledge about various healthcare technologies through interactive quizzes!
      </p>
      <div className="features-container">
        <div className="feature">
          <h3>🏥 Multiple Topics</h3>
          <p>Explore telemedicine, AI diagnostics, and wearable health devices</p>
        </div>
        <div className="feature">
          <h3>🎯 Progressive Learning</h3>
          <p>Complete levels to unlock new challenges and track your progress</p>
        </div>
        <div className="feature">
          <h3>🧠 Educational Content</h3>
          <p>Learn through detailed explanations for each question</p>
        </div>
      </div>
      <button 
        className="btn start-btn" 
        onClick={handleStartQuiz}
      >
        {currentUser ? 'Start Quiz' : 'Login to Start'}
      </button>
    </div>
  );
};

export default Home;