import React, { Component } from 'react';
import logo from '../logo.svg';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo-react" />
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
