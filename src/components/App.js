import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/operate';

const App = () => {
  const [state, setState] = React.useState({
    total: '0',
    next: '0',
    operation: '',
  });

  const handleClick = (name) => {
    const data = { ...state };
    const result = calculate(data, name);
    setState({ result });
  };

  return (
    <div className="App">
      <Display text={state.total === '0' ? state.next : state.total} />
      <ButtonPanel />
    </div>
  );
};

export default App;
