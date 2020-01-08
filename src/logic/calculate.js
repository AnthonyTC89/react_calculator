import operate from './operate';

const calculate = ({data: {total, next, operation}, name}) => {
  switch (name) {
    case 'AC':
      total = 0; // nil
      next = 0; // nil
      operation = ''; // nil
      break;
    case '+/-': 
      total = total * -1;
      next = next * -1;
      break;
    case '%': 
      total = operate(total, next, operation);
      next = '';
      operation = '%';
      break;
    case '÷': 
      total = operate(total, next, operation);
      next = '';
      operation = '÷'
      break;
    case 'X': 
      total = operate(total, next, operation);
      next = '';
      operation = 'X'
      break;
    case '-': 
      total = operate(total, next, operation);
      next = '';
      operation = '-'
      break;
    case '+': 
      total = operate(total, next, operation);
      next = '';
      operation = '+'
      break;
    case '=': 
      total = operate(total, next, operation);
      next = '';
      operation = '';
      break;
    default:
      break;
  }
};

export default calculate;