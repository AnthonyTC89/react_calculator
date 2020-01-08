import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import calculate from '../logic/operate';

const App = () => (
  <div className="App">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
