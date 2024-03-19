import { useState } from "react";

import "./Questions.css";

import QuestionTimer from "../QuestionTimer.jsx";
import Answers from "../Answers/Answers.jsx";
import QUESTIONS from "../../questions.js";

function Questions({ questionIndex, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answersState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answersState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answersState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answersState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answersState={answersState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

export default Questions;
