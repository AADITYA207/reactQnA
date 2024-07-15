import React from 'react';

const Review = ({ answers, questions, onSubmit }) => {
  return (
    <div>
      <h2>Review Your Answers</h2>
      {answers.map(answer => {
        const question = questions.find(q => q.id === answer.id);
        return (
          <div key={answer.id}>
            <h3>{question.question}</h3>
            <p>Your answer: {answer.selected_answer}</p>
            <p>Correct answer: {question.correct_answer}</p>
          </div>
        );
      })}
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Review;
