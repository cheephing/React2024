import { useQuiz } from "./contextes/QuizContext";
import Options from "./Options";

function Question() {
  const { question, index } = useQuiz();
  const curQuestion = question.at(index);
  return (
    <div>
      <h4>{curQuestion.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
