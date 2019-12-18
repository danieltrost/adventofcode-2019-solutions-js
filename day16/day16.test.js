const fs = require('fs');

describe('Day 16 - 1', function() {
  const { compute } = require('./day16-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day16/day16-input.txt', { encoding: 'utf8' })
      .split('')
      .map(Number);

    expect(compute(values)).toEqual('27831665');
  });
});

describe('Day 16 - 2', function() {
  const { compute } = require('./day16-2');

  test('it should return expected answer for test input', function() {
    const values = '03036732577212944063491565474664'.repeat(10000);

    expect(compute(values)).toEqual('84462026');
  });
});
