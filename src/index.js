import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  const [displayValue, setDisplayValue] = useState("");

  const handleClick = (e) => {
    if (displayValue === "Error") {
      setDisplayValue("");
    }
    setDisplayValue((prevValue) => prevValue + e.target.name);
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const handleDel = () => {
    if (displayValue !== "Error") {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue).toString();
      setDisplayValue(result);
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="container">
      <form>
        <input readOnly type="text" value={displayValue} />
      </form>
      <div className="keyboard">
        <button onClick={handleClear} id="clear">Clear</button>
        <button className="special" onClick={handleDel} id="del">C</button>
        <button className="special" onClick={handleClick} name="/">&divide;</button>
        <button onClick={handleClick} name="7">7</button>
        <button onClick={handleClick} name="8">8</button>
        <button onClick={handleClick} name="9">9</button>
        <button className="special" onClick={handleClick} name="*">&times;</button>
        <button onClick={handleClick} name="4">4</button>
        <button onClick={handleClick} name="5">5</button>
        <button onClick={handleClick} name="6">6</button>
        <button className="special" onClick={handleClick} name="-">&ndash;</button>
        <button onClick={handleClick} name="1">1</button>
        <button onClick={handleClick} name="2">2</button>
        <button onClick={handleClick} name="3">3</button>
        <button className="special" onClick={handleClick} name="+">+</button>
        <button onClick={handleClick} name="0">0</button>
        <button onClick={handleClick} name=".">.</button>
        <button onClick={handleCalculate} id="equal"> =</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);