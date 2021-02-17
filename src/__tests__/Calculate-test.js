import '@testing-library/jest-dom/extend-expect';
import Calculate from '../logic/Calculate';

const button1 = '+/-';
const button2 = '+';
const button3 = '-';
const button4 = 'X';
const button5 = '/';
const button6 = 'AC';
const calculatorObj = { total: 15, next: 20, operation: button1 };
const calculatorObj2 = { total: 15, next: 20, operation: button2 };
const calculatorObj3 = { total: 15, next: 20, operation: button3 };
const calculatorObj4 = { total: 15, next: 20, operation: button4 };
const calculatorObj5 = { total: 15, next: 5, operation: button5 };
const calculatorObj6 = { total: 15, next: 5, operation: button6 };

test('negate the given numbers', () => {
  const answer = (Calculate(calculatorObj, button1));
  expect(answer).toEqual({ next: '-20', operation: '+/-', total: '-15' });
});

test('add the given numbers', () => {
  const answer = (Calculate(calculatorObj2, button2));
  const answer2 = Calculate(answer, '=');
  expect(answer2).toEqual({ next: null, operation: null, total: '35' });
});

test('subtract the given numbers', () => {
  const answer = (Calculate(calculatorObj3, button3));
  const answer2 = Calculate(answer, '=');
  expect(answer2).toEqual({ next: null, operation: null, total: '-5' });
});

test('multiply the given numbers', () => {
  const answer = (Calculate(calculatorObj4, button4));
  const answer2 = Calculate(answer, '=');
  expect(answer2).toEqual({ next: null, operation: null, total: '300' });
});

test('divide the given numbers', () => {
  const answer = (Calculate(calculatorObj5, button5));
  const answer2 = Calculate(answer, '=');
  expect(answer2).toEqual({ next: null, operation: null, total: '3' });
});

test('Nullify the numbers', () => {
  const answer = (Calculate(calculatorObj6, button6));
  expect(answer).toEqual({ next: null, operation: null, total: null });
});
