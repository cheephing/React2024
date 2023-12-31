import { useQuiz } from "./contextes/QuizContext";

function Progress() {
  const { index, numQuestion, points, maxPoints, answer } = useQuiz();
  return (
    <div>
      <header className="progress">
        <progress
          max={numQuestion}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Question <strong>{index + 1}</strong> / {numQuestion}{" "}
        </p>
        <p>
          <strong>
            {points} / {maxPoints}
          </strong>
        </p>
      </header>
    </div>
  );
}

export default Progress;
