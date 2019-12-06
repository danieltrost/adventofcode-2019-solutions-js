const fs = require('fs');

describe('Day 5 - 1', function() {
  const { Intcode } = require('./day5-1');

  beforeEach(function() {
    console.log = jest.fn();
  });

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day5/day5-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(n => Number(n));

    Intcode(1, values);

    expect(console.log).toHaveBeenCalledWith(16489636);
  });

  test('it should return expected answer for simple test input', function() {
    const values = [3, 0, 4, 0, 99];

    Intcode(10, values);

    expect(console.log).toHaveBeenCalledWith(10);
  });
});

describe('Day 5 - 2', function() {
  const { Intcode } = require('./day5-2');

  beforeEach(function() {
    console.log = jest.fn();
  });

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day5/day5-input.txt', { encoding: 'utf8' })
      .split(',')
      .map(n => Number(n));

    Intcode(5, values);

    expect(console.log).toHaveBeenCalledWith(9386583);
  });

  test('it should return 1 for position mode equal to 8', function() {
    const values = [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8];

    Intcode(8, values);
    expect(console.log).toHaveBeenCalledWith(1);
  });

  test('it should return 0 for position mode not equal to 8', function() {
    const values = [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8];

    Intcode(7, values);
    expect(console.log).toHaveBeenCalledWith(0);
  });

  test('it should return 1 for position mode less than 8', function() {
    const values = [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8];

    Intcode(7, values);
    expect(console.log).toHaveBeenCalledWith(1);
  });

  test('it should return 0 for position mode not less than 8', function() {
    const values = [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8];

    Intcode(8, values);
    expect(console.log).toHaveBeenCalledWith(0);
  });

  test('it should return 1 for immediate mode equal to 8', function() {
    const values = [3, 3, 1108, -1, 8, 3, 4, 3, 99];

    Intcode(8, values);
    expect(console.log).toHaveBeenCalledWith(1);
  });

  test('it should return 1 for immediate mode not equal to 8', function() {
    const values = [3, 3, 1108, -1, 8, 3, 4, 3, 99];

    Intcode(9, values);
    expect(console.log).toHaveBeenCalledWith(0);
  });

  test('it should return 1 for immediate mode less than 8', function() {
    const values = [3, 3, 1107, -1, 8, 3, 4, 3, 99];

    Intcode(7, values);
    expect(console.log).toHaveBeenCalledWith(1);
  });

  test('it should return 0 for immediate mode not less than 8', function() {
    const values = [3, 3, 1107, -1, 8, 3, 4, 3, 99];

    Intcode(9, values);
    expect(console.log).toHaveBeenCalledWith(0);
  });
});
