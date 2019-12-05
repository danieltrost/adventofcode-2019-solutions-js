describe('Day 4 - 1', function() {
  const { compute } = require('./day4-1');

  test('it should return expected answer for test input', function() {
    expect(compute(402328, 864247)).toEqual(454);
  });
});

describe('Day 4 - 2', function() {
  const { compute } = require('./day4-2');

  test('it should return expected answer for test input', function() {
    expect(compute(402328, 864247)).toEqual(288);
  });
});
