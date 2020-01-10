import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handleClick = (btnName) => {
      const data = { ...this.state };
      const result = calculate(data, btnName);
      this.setState({
        total: result.total,
        next: result.next,
        operation: result.operation,
      });
    };
    const { next, total } = this.state;
    return (
      <div className="App">
        <Display text={next || total || '0'} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    );
  }
}

export default App;
