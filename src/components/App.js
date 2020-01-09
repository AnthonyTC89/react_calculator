import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnName) => {
    const data = { ...state };
    const result = calculate(data, btnName);
    setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  };
  return (
    <div className="App">
      <Display text={state.next || state.total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
