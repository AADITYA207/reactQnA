import React from 'react';

const Result = ({ result }) => {
  return (
    <div>
      <h2>Your Result</h2>
      <p>Total Questions: {result.total_questions}</p>
      <p>Correct Answers: {result.correct_answers}</p>
      <p>Score: {result.score}%</p>
      <p>Feedback: {result.feedback}</p>
    </div>
  );
};

export default Result;
