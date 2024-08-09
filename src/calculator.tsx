import React, { useState } from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
    const [input,setInput] = useState<string>('');
    const [result,setResult] = useState<string>('');
  const findResult = () => {
    try{
        setResult(eval(input));
    }catch(err){
        alert(err);
    }

  }
  const handleClick = (value:string) => {
    setInput(prevInput => prevInput + value);
  }
  const handleClear = () => {
    setInput('');
    setResult('');
  }
  const handleBackspace = () => {
    setInput(prevInput => prevInput.slice(0,-1));
  }
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <input className="result" value={result} readOnly></input>
      </div>
      <div className="keypad">
        <div className="row">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={()=> handleClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={findResult}>=</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="row">
            <button onClick={handleBackspace}>←</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
