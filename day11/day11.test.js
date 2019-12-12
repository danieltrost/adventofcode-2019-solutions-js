const fs = require('fs');

describe('Day 11 - 1', function() {
  const { compute } = require('./day11-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day11/day11-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(Number);

    expect(compute(values)).toEqual(2392);
  });
});

describe('Day 11 - 1', function() {
  const { compute } = require('./day11-2');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day11/day11-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(Number);

    console.log = jest.fn();

    compute(values);

    expect(console.log).toHaveBeenCalled();
  });
});
