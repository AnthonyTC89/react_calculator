/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);

  switch (operation) {
    case '+':
      return x.plus(y);
    case '-':
      return x.minus(y);
    case 'X':
      return x.times(y);
    case '÷':
      if (y === 0) {
        return null;
      }
      return x.div(y);
    case '%':
      return x.div(100).times(y);
    default:
      return null;
  }
};

export default operate;
