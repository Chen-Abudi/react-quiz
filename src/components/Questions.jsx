import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

function Questions({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answersState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answersState={answersState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}

export default Questions;
