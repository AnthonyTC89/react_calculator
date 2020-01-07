import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);

  switch (operation) {
    case '+':
      return x.plus(y);
    case '-':
      return x.minus(y);
    case 'X':
      return x.times(y);
    case '÷':
      return x.div(y);
    case '%':
      return x.div(100).times(y);
    default:
      break;
  }
};

export default operate;