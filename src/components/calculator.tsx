import React, { useState } from 'react';
import { add } from '../utils/calculator';
import './calculator.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | string>('');

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult((error as Error).message);
    }
  };

  return (
    <div className="calculator-container">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>


      <div className="calculator-ui">
        <h1>String Calculator</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers..."
          className="input-field"
        />
        <button onClick={handleCalculate} className="calculate-button">
          Calculate
        </button>
        <h2 className="result">Result: {result}</h2>
      </div>
    </div>
  );
};

export default Calculator;



