import { useState } from "react";

const messages = ["Learn React *", "Apply for jobs", "Invest your new income"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  function handleView() {
    setIsOpen((is) => !is);
  }

  return (
    <>
      <button className="close" onClick={handleView}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              color="#ffff"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              backgroundColor="#7950f2"
              color="#ffff"
              onClick={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      Step {step}: {children}
    </p>
  );
}

function Button({ color, backgroundColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
