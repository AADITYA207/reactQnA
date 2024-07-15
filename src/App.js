import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import Quiz from './Quiz';
import Review from './Review';
import Result from './Result';

const App = () => {
  const [step, setStep] = useState('quiz');
  const [questions] = useState([

    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct_answer: "Mars"
    },
    {
      id: 3,
      question: "Which planet is the largest in the Solar System?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct_answer: "Jupiter"
    },
    {
      id: 4,
      question: "Which planet is closest to the Sun?",
      options: ["Earth", "Mercury", "Venus", "Mars"],
      correct_answer: "Mercury"
    },
    {
      id: 5,
      question: "Which planet has the most extensive ring system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct_answer: "Saturn"
    },
    {
      id: 6,
      question: "Which planet is known as the Earth's twin?",
      options: ["Mars", "Venus", "Jupiter", "Neptune"],
      correct_answer: "Venus"
    },
    {
      id: 7,
      question: "Which planet is known for its Great Red Spot?",
      options: ["Mars", "Jupiter", "Saturn", "Neptune"],
      correct_answer: "Jupiter"
    },
    {
      id: 8,
      question: "Which is the second smallest planet in our Solar System?",
      options: ["Mars", "Mercury", "Venus", "Pluto"],
      correct_answer: "Mars"
    },
    {
      id: 9,
      question: "Which planet is known as the Morning Star or the Evening Star?",
      options: ["Mars", "Venus", "Mercury", "Jupiter"],
      correct_answer: "Venus"
    },
    {
      id: 10,
      question: "Which planet is farthest from the Sun?",
      options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
      correct_answer: "Neptune"
    },
    {
      id: 11,
      question: "Which planet has the highest mountain in our Solar System, Olympus Mons?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correct_answer: "Mars"
    },
    {
      id: 12,
      question: "Which planet is known as the Ice Giant?",
      options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
      correct_answer: "Uranus"
    }
  ]);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null); // Initialize the result state

  const handleQuizSubmit = (submittedAnswers) => {
    setAnswers(submittedAnswers);
    setStep('review');
  };

  const handleReviewSubmit = () => {
    let correctAnswers = 0;
    answers.forEach(answer => {
      if (answer.selected_answer === questions.find(q => q.id === answer.id).correct_answer) {
        correctAnswers++;
      }
    });

    setResult({
      total_questions: questions.length,
      correct_answers: correctAnswers,
      score: (correctAnswers / questions.length) * 100,
      feedback: correctAnswers === questions.length ? "Excellent!" : "Keep practicing!"
    });

    setStep('result');
  };

  const handleRestart = () => {
    setAnswers([]);
    setResult(null);
    setStep('quiz');
  };

  return (
    <div className="App">
      {step === 'quiz' && <Quiz questions={questions} onSubmit={handleQuizSubmit} />}
      {step === 'review' && <Review answers={answers} questions={questions} onSubmit={handleReviewSubmit} />}
      {step === 'result' && <Result result={result} />}
      {step === 'result' && (
        <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
      )}
    </div>
  );
}

export default App;
