const fs = require('fs');

describe('Day 1 - 1', function() {
  const { fuelRequirements } = require('./day1-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day1/day1-input.txt', { encoding: 'utf8' })
      .split('\n');

    expect(fuelRequirements(values)).toEqual(3497998);
  });

  test('it should return expected answer for simple test input', function() {
    const simpleInput = [
      [12, 2],
      [14, 2],
      [1969, 654],
      [100756, 33583],
    ];

    simpleInput.forEach(arr => {
      expect(fuelRequirements([arr[0]])).toEqual(arr[1]);
    });
  });
});

describe('Day 1 - 2', function() {
  const { fuelRequirements } = require('./day1-2');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day1/day1-input.txt', { encoding: 'utf8' })
      .split('\n');

    expect(fuelRequirements(values)).toEqual(5244112);
  });

  test('it should return expected answer for simple test input', function() {
    const simpleInput = [
      [12, 2],
      [14, 2],
      [1969, 966],
      [100756, 50346],
    ];

    simpleInput.forEach(arr => {
      expect(fuelRequirements([arr[0]])).toEqual(arr[1]);
    });
  });
});
