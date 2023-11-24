import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const todayDate = new Date(Date.now());
  todayDate.setDate(todayDate.getDate() + count);

  function handleMinusStep() {
    setStep((currentStep) => currentStep - 1);
  }

  function handleAddStep() {
    setStep((currentStep) => currentStep + 1);
  }

  function handleMinusCount() {
    setCount((currentCount) => currentCount - step);
  }

  function handleAddCount() {
    setCount((currentCount) => currentCount + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>{" "}
        {step}
        {/* <button onClick={handleMinusStep}>-</button>
        Step : {step}
        <button onClick={handleAddStep}>+</button> */}
      </div>
      <div>
        <button onClick={handleMinusCount}>-</button>
        {/* Count : {count} */}
        <input value={count} onChange={(e) => setCount(e.target.value)}></input>
        <button onClick={handleAddCount}>+</button>
      </div>
      <p>
        {count} days from today is {todayDate.toDateString()}
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
