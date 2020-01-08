/* eslint no-param-reassign: ["error", { "props": false }] */
import operate from './operate';

const calculate = (data, name) => {
  switch (name) {
    case 'AC':
      data.total = 0; // nil
      data.next = 0; // nil
      data.operation = ''; // nil
      return data;
    case '+/-':
      data.total *= -1;
      data.next *= -1;
      return data;
    case '%':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '%';
      return data;
    case '÷':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '÷';
      return data;
    case 'X':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = 'X';
      return data;
    case '-':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '-';
      return data;
    case '+':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '+';
      return data;
    case '=':
      data.total = operate(data.total, data.next, data.operation);
      data.next = '';
      data.operation = '';
      return data;
    default:
      return data;
  }
};

export default calculate;
