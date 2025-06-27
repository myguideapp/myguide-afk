import { useState } from 'react';

const questions = [
  {
    question: 'What is the normal pH of saliva?',
    options: ['5.5', '6.5', '7.0', '8.0'],
    answer: 1
  },
  {
    question: 'Which tooth is most commonly extracted?',
    options: ['First molar', 'Second molar', 'Canine', 'Premolar'],
    answer: 0
  }
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [review, setReview] = useState([]);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    } else {
      setReview([...review, current]);
    }
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      {!finished ? (
        <div>
          <h2>{questions[current].question}</h2>
          <ul>
            {questions[current].options.map((opt, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    checked={selected === idx}
                    onChange={() => handleSelect(idx)}
                  />{' '}
                  {opt}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNext} disabled={selected === null}>
            {current + 1 === questions.length ? 'Finish' : 'Next'}
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed</h2>
          <p>Your score: {score} / {questions.length}</p>
          {review.length > 0 && (
            <div>
              <h3>Review Incorrect Answers:</h3>
              <ul>
                {review.map((idx) => (
                  <li key={idx}>{questions[idx].question}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}