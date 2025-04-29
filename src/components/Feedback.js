import React from 'react';
import './Feedback.css';

const Feedback = ({ isCorrect, explanation, onNext, isLastQuestion }) => {
  return (
    <div className="feedback-container">
      <h3 className={`feedback-result ${isCorrect ? 'correct' : 'incorrect'}`}>
        {isCorrect ? 'Correct!' : 'Incorrect'}
      </h3>
      <p className="feedback-explanation">{explanation}</p>
      <button 
        className="btn next-btn" 
        onClick={onNext}
      >
        {isLastQuestion ? 'See Results' : 'Next Question'}
      </button>
    </div>
  );
};

export default Feedback;