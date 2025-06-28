import React from 'react';

export default function TopicSelector({ topics, selectedTopic, onSelectTopic }) {
  return (
    <div>
      <h3>Select a Topic:</h3>
      <select value={selectedTopic} onChange={(e) => onSelectTopic(e.target.value)}>
        <option value="">-- Choose Topic --</option>
        {topics.map((topic) => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
    </div>
  );
}
