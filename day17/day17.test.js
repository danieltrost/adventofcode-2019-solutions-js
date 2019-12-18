const fs = require('fs');

describe('Day 17 - 1', function() {
  const { compute } = require('./day17-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day17/day17-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(Number);

    expect(compute(values)).toEqual(7720);
  });
});
