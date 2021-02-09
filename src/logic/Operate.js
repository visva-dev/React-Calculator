import Big from 'big.js';

let result = Infinity;

const Operate = (numberOne = null, numberTwo = null, operation) => {
  const operations = ['+', '-', 'X', '/', '%'];
  if (operations.includes(operation)) {
    if (operation === '+') {
      result = new Big(numberOne).plus(new Big(numberTwo));
    } else if (operation === '-') {
      result = new Big(numberOne).minus(new Big(numberTwo));
    } else if (operation === 'X') {
      result = new Big(numberOne).times(new Big(numberTwo));
    } else if (operation === '/') {
      try {
        result = new Big(numberOne).div(new Big(numberTwo));
      } catch (error) {
        return 'Infinity';
      }
    } else if (operation === '%') {
      if (numberOne) {
        result = new Big(numberOne).div(100);
      } else {
        result = new Big(numberTwo).div(100);
      }
    }
  }
  return result.toString();
};

export default Operate;
