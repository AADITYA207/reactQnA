import React, { useState } from 'react';

const Quiz = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState(
    questions.map(q => ({ id: q.id, selected_answer: '' }))
  );
  const [errors, setErrors] = useState({});

  const handleChange = (id, selected_answer) => {
    setAnswers(prevAnswers =>
      prevAnswers.map(answer =>
        answer.id === id ? { ...answer, selected_answer } : answer
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    let isValid = true;

    answers.forEach(answer => {
      if (!answer.selected_answer) {
        formErrors[answer.id] = "This question is required.";
        isValid = false;
      }
    });

    if (isValid) {
      onSubmit(answers);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map(question => (
        <div key={question.id} className="question">
          <h3>{question.question}</h3>
          <select
            value={answers.find(answer => answer.id === question.id).selected_answer}
            onChange={(e) => handleChange(question.id, e.target.value)}
          >
            <option value="">Select an answer</option>
            {question.options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors[question.id] && <p className="error">{errors[question.id]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Quiz;
