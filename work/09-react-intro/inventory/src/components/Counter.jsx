import { useState } from "react";
import Reorder from "./Reorder";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const onReorder = () => {
    setCounter(5);
  };
  return (
    <>
      <p>{counter}</p>
      <div className="button-container">
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter} disabled={!counter}>
          -
        </button>
        {counter == 0 && (
          <div className="btn-reorder">
            <Reorder onReorder={onReorder} />
          </div>
        )}
      </div>
    </>
  );
};

export default Counter;
