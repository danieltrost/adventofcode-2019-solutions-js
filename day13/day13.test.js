const fs = require('fs');

describe('Day 13 - 1', function() {
  const { compute } = require('./day13-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day13/day13-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(Number);

    expect(compute(values)).toEqual(309);
  });
});

describe('Day 13 - 2', function() {
  const { compute } = require('./day13-2');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day13/day13-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(Number);

    expect(compute(values)).toEqual(15410);
  });
});
