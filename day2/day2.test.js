const fs = require('fs');

describe('Day 2 - 1', function() {
  const { Intcode } = require('./day2-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day2/day2-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(n => Number(n));

    expect(Intcode(values)).toEqual(11590668);
  });
});

describe('Day 2 - 2', function() {
  const { determineNounAndVerb } = require('./day2-2');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day2/day2-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(n => Number(n));

    expect(determineNounAndVerb(values)).toEqual(2254);
  });
});
