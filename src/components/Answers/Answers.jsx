import { useRef } from "react";
import "./Answers.css";

function Answers({ answers, selectedAnswer, answersState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answersState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answersState === "correct" || answersState === "wrong") &&
          isSelected
        ) {
          cssClass = answersState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answersState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
