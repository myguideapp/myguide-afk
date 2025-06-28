import React, { useState } from 'react';
import { quizData } from './quizData';
import QuestionCard from './QuestionCard';
import TopicSelector from './TopicSelector';

export default function Quiz() {
  const topics = Object.keys(quizData);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = selectedTopic ? quizData[selectedTopic] : [];

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <TopicSelector 
        topics={topics} 
        selectedTopic={selectedTopic} 
        onSelectTopic={(topic) => {
          setSelectedTopic(topic);
          setCurrentIndex(0);
        }} 
      />

      {selectedTopic && questions.length > 0 && (
        <>
          <QuestionCard data={questions[currentIndex]} />
          <div>
            <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
            <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>Next</button>
          </div>
          <p>
            Question {currentIndex + 1} of {questions.length}
          </p>
        </>
      )}
    </div>
  );
}
