const sum = require('./sum');

test('[#4] adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('[#4] adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adds negative numbers', () => {
  expect(sum(-1, 1)).toBe(0);
});
