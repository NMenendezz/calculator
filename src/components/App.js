import React, { useState } from "react";
import Display from "./Display";
import Btn from "./Btn";

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
      <Display value={displayValue} />
      <div className="keyboard">
        <Btn onClick={handleClear} className="special" text="Clear" id="clear-btn">
        </Btn>
        <Btn onClick={handleDel} className="special" text="C">
        </Btn>
        <Btn onClick={handleClick} name="/" className="special" text="&divide;">
        </Btn>
        <Btn onClick={handleClick} name="7" className="btn" text="7">
        </Btn>
        <Btn onClick={handleClick} name="8" className="btn" text="8">
        </Btn>
        <Btn onClick={handleClick} name="9" className="btn" text="9">
        </Btn>
        <Btn onClick={handleClick} name="*" className="special" text="&times;">
        </Btn>
        <Btn onClick={handleClick} name="4" className="btn" text="4">
        </Btn>
        <Btn onClick={handleClick} name="5" className="btn" text="5">
        </Btn>
        <Btn onClick={handleClick} name="6" className="btn" text="6">
        </Btn>
        <Btn onClick={handleClick} name="-" className="special" text="&ndash;">
        </Btn>
        <Btn onClick={handleClick} name="1" className="btn" text="1">
        </Btn>
        <Btn onClick={handleClick} name="2" className="btn" text="2">
        </Btn>
        <Btn onClick={handleClick} name="3" className="btn" text="3">
        </Btn>
        <Btn onClick={handleClick} name="+" className="special" text="+">
        </Btn>
        <Btn onClick={handleClick} name="0" className="btn" text="0">
        </Btn>
        <Btn onClick={handleClick} name="." className="btn" text=".">
        </Btn>
        <Btn onClick={handleCalculate} className="special" text="=" id="equal-btn">
        </Btn>
      </div>
    </div>
  );
};

export default App;