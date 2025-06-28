
import React from 'react';
import questions from '../data/quizData';

const TopicSelector = ({ setTopic }) => {
  const topics = Array.from(new Set(questions.map(q => q.topic)));
  return (
    <div>
      <label>Select Topic: </label>
      <select onChange={(e) => setTopic(e.target.value)}>
        <option value="All">All</option>
        {topics.map((t, i) => <option key={i} value={t}>{t}</option>)}
      </select>
    </div>
  );
};

export default TopicSelector;
