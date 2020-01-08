import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/operate';

const App = () => {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: ''
    };
  }
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default App;
