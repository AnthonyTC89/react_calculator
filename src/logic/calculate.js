const calculate = ({data: {total, next, operation}, name}) => {
  switch (name) {
    case 'AC':
      console.log(name);
      break;
    case '+/-': 
      total = total * -1;
      next = next * -1;
      break;
    case '%': 
      break;
    case '÷': 
      break;
    case 'X': 
      break;
    case '-': 
      break;
    case '+': 
      break;
    case '=': 
      break;
    default:
      break;
  }
};

export default calculate;