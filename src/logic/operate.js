/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === null) {
    return numberTwo;
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
      if (y.eq(0)) {
        return '0';
      }
      return x.div(y).toString();
    default:
      return 'null';
  }
};

export default operate;
