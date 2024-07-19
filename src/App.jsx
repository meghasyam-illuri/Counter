import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count < 1) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="box-container">
        <div className="main-container">
          <button className="button-56" role="button" onClick={increase}>
            +
          </button>
          <h1>{count}</h1>
          <button className="button-56" role="button" onClick={decrease}>
            -
          </button>
        </div>
        <button className="button-54" role="button" onClick={resetCount}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
