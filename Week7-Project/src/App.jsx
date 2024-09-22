import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const dummyQuestions = [
        {
          question: 'What is the capital of France?',
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          answer: 'Paris',
        },
        {
          question: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          answer: '4',
        },
      ];
      setQuestions(dummyQuestions);
    };

    fetchQuestions();
  }, []);

  const handleOptionSelect = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setQuizSubmitted(true);
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div>
        <h2>{currentQuestion.question}</h2>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={option}
              name="quiz-option"
              value={option}
              checked={userAnswers[currentQuestionIndex] === option}
              onChange={() => handleOptionSelect(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
        <button
          onClick={() => {
            if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
              handleSubmit();
            }
          }}
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
        </button>
      </div>
    );
  };

  const renderResults = () => (
    <div>
      <h2>Quiz Results</h2>
      <p>Your score: {score} out of {questions.length}</p>
      <Link to="/">Go Back to Quiz</Link>
    </div>
  );

  return (
    <div>
      {quizSubmitted ? renderResults() : renderQuestion()}
    </div>
  );
};

const App = () => (
  <Router>
    <div>
      <h1>Quiz App</h1>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/" component={Quiz} />
      </Switch>
    </div>
  </Router>
);

export default App;
