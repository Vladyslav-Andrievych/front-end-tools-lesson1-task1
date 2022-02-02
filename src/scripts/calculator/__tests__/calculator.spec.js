import { sum, mult } from '../calculator.js';

it('Should return sum of numbers', () => {
  expect(sum(4, -2)).toEqual(2);
});

it('Should return mult of numbers', () => {
  expect(mult(4, -2)).toEqual(-8);
});
