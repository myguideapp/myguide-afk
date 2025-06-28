
import React from 'react';

const QuestionCard = ({ question, handleAnswer }) => {
  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((opt, idx) => (
        <button key={idx} onClick={() => handleAnswer(opt === question.correct)}>
          {opt}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
