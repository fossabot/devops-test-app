const sum = require('./sum');

test('adds 1 + 2 to equal 3 [issue-4]', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 0 + 0 to equal 0 [issue-4]', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adds negative numbers', () => {
  expect(sum(-1, 1)).toBe(0);
});
