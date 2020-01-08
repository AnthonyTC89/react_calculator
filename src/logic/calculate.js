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
      data.next = operate(data.next, '-1', 'X');
      return data;
    case '%':
      data.operation = '%';
      data.total = operate(data.next, data.total, data.operation);
      data.next = null;
      return data;
    case '÷':
      data.operation = '÷';
      data.total = operate(data.next, data.total, data.operation);
      data.next = null;
      return data;
    case 'X':
      data.operation = 'X';
      data.total = operate(data.next, data.total, data.operation);
      data.next = null;
      return data;
    case '-':
      data.operation = '-';
      data.total = operate(data.next, data.total, data.operation);
      data.next = null;
      return data;
    case '+':
      data.operation = '+';
      data.total = operate(data.next, data.total, data.operation);
      data.next = null;
      return data;
    case '=':
      data.total = operate(data.next, data.total, data.operation);
      data.next = null;
      data.operation = null;
      return data;
    default:
      if (data.next === '0' && btnName === '0') {
        return data;
      }
      if (data.next) {
        data.next += btnName;
      } else {
        data.next = btnName;
      }
      return data;
  }
};

export default calculate;
