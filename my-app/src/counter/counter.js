import React, { useState } from 'react';
import './style.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleMinus = () => {setCount(count - 1)};
  const handlePlus = () => {setCount(count + 1)};
  const handleReset = () => {setCount(0)};

  return (
    <div className="App">
      <div>
      <h2>Counter:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={handleMinus}>- Minus</button>
        <button className="plus" onClick={handlePlus}>+ Plus</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
