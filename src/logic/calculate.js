/* eslint no-param-reassign: ["error", { "props": false }] */
import operate from './operate';

const calculate = ({ data, name }) => {
  switch (name) {
    case 'AC':
      data.total = 0; // nil
      data.next = 0; // nil
      data.operation = ''; // nil
      break;
    case '+/-':
      data.total *= -1;
      data.next *= -1;
      break;
    case '%':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '%';
      break;
    case '÷':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '÷';
      break;
    case 'X':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = 'X';
      break;
    case '-':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '-';
      break;
    case '+':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '+';
      break;
    case '=':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '';
      break;
    default:
      break;
  }
};

export default calculate;
