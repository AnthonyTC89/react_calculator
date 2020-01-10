/* eslint no-param-reassign: ["error", { "props": false }] */
import operate from './operate';

const calculate = (data, btnName) => {
  switch (btnName) {
    case 'AC':
      data.total = null;
      data.next = null;
      data.operation = null;
      return data;
    case '+/-':
      if (data.next) {
        data.next = operate(data.next, '-1', 'X');
      }
      return data;
    case '%':
      if (data.next) {
        data.next = operate(data.next, 100, '÷');
      }
      return data;
    case '÷':
      if (data.next) {
        data.total = operate(data.total, data.next, data.operation);
        data.next = null;
      }
      data.operation = '÷';
      return data;
    case 'X':
      if (data.next) {
        data.total = operate(data.total, data.next, data.operation);
        data.next = null;
      }
      data.operation = 'X';
      return data;
    case '-':
      if (data.next) {
        data.total = operate(data.total, data.next, data.operation);
        data.next = null;
      }
      data.operation = '-';
      return data;
    case '+':
      if (data.next) {
        data.total = operate(data.total, data.next, data.operation);
        data.next = null;
      }
      data.operation = '+';
      return data;
    case '=':
      if (data.operation && data.next && data.total) {
        data.total = operate(data.total, data.next, data.operation);
        data.next = null;
        data.operation = null;
      }
      return data;
    default:
      if (btnName === '0' && data.next === '0') {
        return data;
      }
      if (data.next) {
        if (btnName === '.' && data.next.includes('.')) {
          return data;
        }
        data.next += btnName;
      } else {
        data.next = btnName;
      }
      return data;
  }
};

export default calculate;
