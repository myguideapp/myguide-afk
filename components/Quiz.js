
import React, { useState } from 'react';
import questions from '../data/quizData';
import QuestionCard from './QuestionCard';
import TopicSelector from './TopicSelector';

const Quiz = () => {
  const [topic, setTopic] = useState('All');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const filteredQuestions = topic === 'All' ? questions : questions.filter(q => q.topic === topic);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    else setIncorrectAnswers([...incorrectAnswers, filteredQuestions[currentQuestion]]);
    const next = currentQuestion + 1;
    if (next < filteredQuestions.length) setCurrentQuestion(next);
    else setShowScore(true);
  };

  const restartQuiz = () => {
    setScore(0);
    setShowScore(false);
    setCurrentQuestion(0);
    setIncorrectAnswers([]);
  };

  return (
    <div>
      <TopicSelector setTopic={setTopic} />
      {!showScore ? (
        <QuestionCard question={filteredQuestions[currentQuestion]} handleAnswer={handleAnswer} />
      ) : (
        <div>
          <h2>Your score: {score} / {filteredQuestions.length}</h2>
          {incorrectAnswers.length > 0 && (
            <div>
              <h3>Review Incorrect Answers:</h3>
              {incorrectAnswers.map((q, i) => (
                <div key={i}>
                  <p><strong>{q.question}</strong></p>
                  <p>Correct answer: {q.correct}</p>
                </div>
              ))}
            </div>
          )}
          <button onClick={restartQuiz}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
