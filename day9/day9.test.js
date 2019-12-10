const fs = require('fs');
const { compute } = require('./day9');

describe('Day 9 - 1', function() {
  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day9/day9-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(Number);

    expect(compute(values, 1)).toEqual(3533056970);
  });

  test('it should return expect answer for simple input', function() {
    const values = [
      [[1102, 34915192, 34915192, 7, 4, 7, 99, 0], 1219070632396864],
      [[104, 1125899906842624, 99], 1125899906842624],
    ];

    values.forEach(arr => {
      expect(compute(arr[0], 1)).toEqual(arr[1]);
    });
  });
});

describe('Day 9 - 1', function() {
  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day9/day9-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(Number);

    expect(compute(values, 2)).toEqual(72852);
  });
});
