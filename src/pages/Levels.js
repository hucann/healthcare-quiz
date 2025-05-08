import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import LevelCard from '../components/LevelCard';
import quizLevels from '../data/quizData';
import './Levels.css';

const Levels = () => {
  const [userProgress, setUserProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        if (currentUser) {
          const progressDocRef = doc(db, 'userProgress', currentUser.uid);
          const progressDoc = await getDoc(progressDocRef);

          if (progressDoc.exists()) {
            setUserProgress(progressDoc.data().completedLevels || {});
          }
        }
      } catch (error) {
        console.error('Error fetching user progress:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, [currentUser]);

  const getLevelStatus = (level) => {
    const progress = userProgress[level.id];
  
    // If level was attempted, check exact status
    if (progress) {
      if (progress.status === "completed") {
        return "completed";
      } else if (progress.status === "failed") {
        return "failed";
      }
    }
  
    // If it's the first level (always unlocked)
    if (level.unlockRequirement === null) {
      return "unlocked";
    }
  
    // If previous level was completed (passed)
    const requirement = userProgress[level.unlockRequirement];
    if (requirement && requirement.status === "completed") {
      return "unlocked";
    }
  
    // Otherwise, level is locked
    return "locked";
  };

  if (loading) {
    return <div className="loading">Loading levels...</div>;
  }

  return (
    <div className="levels-screen screen">
      <h2>Select a Level</h2>
      <p>Score at least 3 out of 5 to unlock the next level.</p>

      <div className="levels-container">
        {quizLevels.map(level => (
          <LevelCard
            key={level.id}
            level={level}
            status={getLevelStatus(level)}
          />
        ))}
      </div>

      <button
        className="btn secondary-btn back-btn"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Levels;