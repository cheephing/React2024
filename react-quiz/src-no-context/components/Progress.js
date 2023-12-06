function Progress({ index, numQuestion, points, maxPoints, answer }) {
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
