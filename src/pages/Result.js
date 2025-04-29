import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import quizLevels from '../data/quizData';
import './Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [nextLevelId, setNextLevelId] = useState(null);
  const [saving, setSaving] = useState(true);
  
  // Get result data from location state
  const { levelId, score, totalQuestions } = location.state || {};
  
  useEffect(() => {
    // If no result data, redirect to levels
    if (!levelId || score === undefined || !totalQuestions) {
      navigate('/levels');
      return;
    }
    
    // Find next level
    const currentLevelIndex = quizLevels.findIndex(level => level.id === levelId);
    if (currentLevelIndex !== -1 && currentLevelIndex < quizLevels.length - 1) {
      setNextLevelId(quizLevels[currentLevelIndex + 1].id);
    }
    
    // Save progress to Firestore
    const saveProgress = async () => {
      try {
        if (currentUser) {
          const progressDocRef = doc(db, 'userProgress', currentUser.uid);
          
          // Get existing progress
          const progressDoc = await getDoc(progressDocRef);
          const existingProgress = progressDoc.exists() 
            ? progressDoc.data().completedLevels || {}
            : {};
          
          // Update progress
          await setDoc(progressDocRef, {
            completedLevels: {
              ...existingProgress,
              [levelId]: {
                completed: true,
                score,
                totalQuestions
              }
            }
          }, { merge: true });
        }
      } catch (error) {
        console.error('Error saving progress:', error);
      } finally {
        setSaving(false);
      }
    };
    
    saveProgress();
  }, [levelId, score, totalQuestions, currentUser, navigate]);
  
  const getScoreMessage = () => {
    if (score === totalQuestions) {
      return "Perfect! You've mastered this topic!";
    } else if (score >= Math.floor(totalQuestions * 0.7)) {
      return "Great job! You have good knowledge of this topic.";
    } else if (score >= Math.floor(totalQuestions * 0.5)) {
      return "Not bad! You have a basic understanding of this topic.";
    } else {
      return "You might want to learn more about this topic.";
    }
  };
  
  const handleNextLevel = () => {
    if (nextLevelId) {
      navigate(`/quiz/${nextLevelId}`);
    }
  };
  
  const handleReturnToLevels = () => {
    navigate('/levels');
  };
  
  if (!levelId || score === undefined || !totalQuestions) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="level-complete-screen screen">
      <h2>Level Complete!</h2>
      
      {saving ? (
        <div className="saving-progress">Saving your progress...</div>
      ) : (
        <div className="level-score-container">
          <p className="score-display">
            Your Score: <span className="final-score">{score}</span>/<span>{totalQuestions}</span>
          </p>
          
          <div className="level-score-message">
            {getScoreMessage()}
          </div>
          
          <div className="level-complete-actions">
            {nextLevelId && (
              <button 
                className="btn next-level-btn"
                onClick={handleNextLevel}
              >
                Next Level
              </button>
            )}
            
            <button 
              className="btn secondary-btn return-btn"
              onClick={handleReturnToLevels}
            >
              Return to Levels
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;