import React from 'react';

export default function QuestionCard({ data }) {
  const { question, options } = data;

  return (
    <div style={{ marginTop: '1rem' }}>
      <h2>{question}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input type="radio" name="question" value={option} />
              {' '}
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
