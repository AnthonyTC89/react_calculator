/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberTwo === null) {
    return numberOne;
  }
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  switch (operation) {
    case '+':
      return x.plus(y).toString();
    case '-':
      return x.minus(y).toString();
    case 'X':
      return x.times(y).toString();
    case '÷':
      if (y === 0) {
        return 'null';
      }
      return y.div(x).toString();
    case '%':
      return x.div(100).times(y).toString();
    default:
      return 'null';
  }
};

export default operate;
