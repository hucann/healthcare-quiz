import React, { useState } from 'react';
import './QuizQuestion.css';

const QuizQuestion = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };
  
  const handleSubmit = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption);
      setSelectedOption(null); // Reset for next question
    }
  };
  
  return (
    <div className="question-container">
      <h3 className="question-text">{question.question}</h3>
      
      <div className="options-container">
        {question.options.map((option, index) => (
          <div 
            key={index}
            className={`option ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>
      
      <button 
        className="btn submit-btn" 
        onClick={handleSubmit}
        disabled={selectedOption === null}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default QuizQuestion;