import { useState } from "react";
import "./index.css";

function App() {
  const version = 2;
  return version === 1 ? <V1 /> : <V2 />;
}

function V1() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  //atualização da data
  date.setDate(date.getDate() + count);
  function DecrementStep() {
    setStep((s) => s - 1);
  }
  function IncrementStep() {
    setStep((s) => s + 1);
  }
  function DecrementCount() {
    return setCount((c) => c - step);
  }
  function IncrementCount() {
    return setCount((c) => c + step);
  }

  return (
    <div className="App">
      <button onClick={DecrementStep}>➖</button>
      <span>Step: {step}</span>
      <button onClick={IncrementStep}>➕</button>
      <p></p>
      <button onClick={DecrementCount}>➖</button>
      <span>Count: {count}</span>
      <button onClick={IncrementCount}>➕</button>
      <p></p>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

function V2() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  //atualização da data
  date.setDate(date.getDate() + Number(count));
  function DecrementStep() {
    setStep((s) => s - 1);
  }
  function IncrementStep() {
    setStep((s) => s + 1);
  }
  function DecrementCount() {
    setCount((c) => Number(c) - Number(step));
  }
  function IncrementCount() {
    setCount((c) => Number(c) + Number(step));
  }
  function Reset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="App">
      <input
        type="range"
        min={1}
        max={10}
        value={step}
        onChange={(e) => setStep(e.target.value)}
      ></input>
      <span> Step: {step}</span>
      <p></p>
      <button onClick={DecrementCount}>➖</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      ></input>

      <button onClick={IncrementCount}>➕</button>
      <p></p>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
      <p></p>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
