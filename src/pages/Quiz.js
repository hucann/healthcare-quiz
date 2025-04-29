import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import quizLevels from '../data/quizData';
import QuizQuestion from '../components/QuizQuestion';
import ProgressBar from '../components/ProgressBar';
import Feedback from '../components/Feedback';
import './Quiz.css';

const Quiz = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Find the level data
  useEffect(() => {
    const level = quizLevels.find(level => level.id === levelId);
    if (level) {
      setCurrentLevel(level);
    } else {
      // Level not found, redirect to levels page
      navigate('/levels');
    }
    setLoading(false);
  }, [levelId, navigate]);
  
  const handleAnswer = (selectedOptionIndex) => {
    const currentQuestion = currentLevel.questions[currentQuestionIndex];
    const correct = selectedOptionIndex === currentQuestion.correctAnswer;
    
    if (correct) {
      setScore(prevScore => prevScore + 1);
    }
    
    setIsCorrect(correct);
    setShowFeedback(true);
  };
  
  const handleNextQuestion = () => {
    setShowFeedback(false);
    
    if (currentQuestionIndex < currentLevel.questions.length - 1) {
      // Move to next question
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Quiz completed, navigate to result page with state
      navigate('/result', { 
        state: { 
          levelId: currentLevel.id,
          score,
          totalQuestions: currentLevel.questions.length
        }
      });
    }
  };
  
  if (loading || !currentLevel) {
    return <div className="loading">Loading quiz...</div>;
  }
  
  const currentQuestion = currentLevel.questions[currentQuestionIndex];
  
  return (
    <div className="quiz-screen screen">
      <div className="quiz-header">
        <h2>{currentLevel.title}</h2>
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={currentLevel.questions.length} 
        />
      </div>
      
      {showFeedback ? (
        <Feedback 
          isCorrect={isCorrect}
          explanation={currentQuestion.explanation}
          onNext={handleNextQuestion}
          isLastQuestion={currentQuestionIndex === currentLevel.questions.length - 1}
        />
      ) : (
        <QuizQuestion 
          question={currentQuestion} 
          onAnswer={handleAnswer} 
        />
      )}
    </div>
  );
};

export default Quiz;