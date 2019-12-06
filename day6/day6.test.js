const fs = require('fs');

describe('Day 6 - 1', function() {
  const { compute } = require('./day6-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day6/day6-input.txt', { encoding: 'utf8' })
      .split('\n');

    expect(compute(values)).toEqual(106065);
  });

  test('it should return expected answer for simple test input', function() {
    const values = [
      'COM)B',
      'B)C',
      'C)D',
      'D)E',
      'E)F',
      'B)G',
      'G)H',
      'D)I',
      'E)J',
      'J)K',
      'K)L',
    ];

    expect(compute(values)).toEqual(42);
  });
});

describe('Day 6 - 2', function() {
  const { compute } = require('./day6-2');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day6/day6-input.txt', { encoding: 'utf8' })
      .split('\n');

    expect(compute(values)).toEqual(253);
  });

  test('it should return expected answer for simple test input', function() {
    const values = [
      'COM)B',
      'B)C',
      'C)D',
      'D)E',
      'E)F',
      'B)G',
      'G)H',
      'D)I',
      'E)J',
      'J)K',
      'K)L',
      'K)YOU',
      'I)SAN',
    ];

    // console.log(compute);

    expect(compute(values)).toEqual(4);
  });
});
