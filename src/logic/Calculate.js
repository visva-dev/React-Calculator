import Operate from './Operate';

const Calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const operations = ['+', 'X', '-', '/'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total = (total * (-1)).toString();
    next = (next * (-1)).toString();
  } else if (buttonName === '%') {
    next = (0.01 * total).toString();
    operation = '%';
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (operations.includes(buttonName)) {
    operation = buttonName;
  } else if (operation && digits.includes(buttonName)) {
    next = next ? next + buttonName : buttonName;
  } else if (digits.includes(buttonName)) {
    total = total ? total + buttonName : buttonName;
  }
  return { total, next, operation };
};

export default Calculate;
