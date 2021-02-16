import React, { useState } from 'react';
import '../app.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const { total, next, operation } = state;
    const data = { total, next, operation };

    const result = Calculate(data, buttonName);

    setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  };

  const { total, next, operation } = state;
  let result;
  if (operation === null) {
    result = total;
  } else if (operation === '+/-') {
    if (next === null || next === '0') {
      result = total;
    } else {
      result = next;
    }
  } else {
    result = next === null ? operation : next;
  }
  return (
    <div className="app">
      <Display result={result} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};
export default App;
