/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
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

const ButtonPanel = (props) => {
  const { clickHandler } = props;
  const handleClick = (btnName) => clickHandler(btnName);
  return (
    <div className="buttonPanel">
      { arraySymbols.map((row, i) => (
        <div className="row" key={i.toString()}>
          { row.map((item, j) => (
            <Button
              key={item + j.toString()}
              name={item}
              color={buttonOperation(item) ? 'orange' : 'gray'}
              wide={item === '0'}
              clickHandler={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
