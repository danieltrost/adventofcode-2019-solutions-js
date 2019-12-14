const fs = require('fs');

describe('Day 14 - 1', function() {
  const { compute } = require('./day14-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day14/day14-input.txt', { encoding: 'utf8' })
      .split('\n');

    expect(compute(values)).toEqual(248794);
  });
});
