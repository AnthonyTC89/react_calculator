import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const arraySymbols = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const buttonOperation = (item) => {
  if (item === '÷' || item === 'X' || item === '-' || item === '+' || item === '=') {
    return true;
  }
  return false;
};

const ButtonPanel = () => (
  <div className="buttonPanel">
    { arraySymbols.map((row, i) => (
      <div className="row" key={i.toString()}>
        { row.map((item, j) => (
          <Button
            key={item + j.toString()}
            name={item}
            color={buttonOperation(item) ? 'orange' : 'gray'}
            wide={item === '0'}
          />
        ))}
      </div>
    ))}
  </div>
);

export default ButtonPanel;
