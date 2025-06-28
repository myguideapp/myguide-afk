import { useState } from 'react';
import { quizData } from './quizData';

export default function Quiz() {
  const [topic, setTopic] = useState(Object.keys(quizData)[0]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [review, setReview] = useState([]);

  const questions = quizData[topic];

  const handleAnswer = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    } else {
      setReview([...review, current]);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <h3>Select Topic:</h3>
      <select value={topic} onChange={e => { setTopic(e.target.value); setCurrent(0); setScore(0); setSelected(null); setShowScore(false); setReview([]); }}>
        {Object.keys(quizData).map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      {showScore ? (
        <div>
          <h2>Score: {score}/{questions.length}</h2>
          <h3>Review:</h3>
          <ul>{review.map(i => <li key={i}>{questions[i].question}</li>)}</ul>
        </div>
      ) : (
        <div>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((opt, i) => (
            <div key={i}>
              <label>
                <input
                  type="radio"
                  name="option"
                  checked={selected === i}
                  onChange={() => setSelected(i)}
                />
                {opt}
              </label>
            </div>
          ))}
          <button onClick={handleAnswer} disabled={selected === null}>Next</button>
        </div>
      )}
    </div>
  );
}