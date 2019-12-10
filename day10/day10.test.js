const fs = require('fs');

describe('Day 10 - 1', function() {
  const { compute } = require('./day10-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day10/day10-input.txt', { encoding: 'utf8' })
      .split('\n')
      .map(arr => arr.split(''));

    expect(compute(values)).toEqual(299);
  });

  test('it should return expected answer for simple input', function() {
    const values = '......#.#.\n#..#.#....\n..#######.\n.#.#.###..\n.#..#.....\n..#....#.#\n#..#....#.\n.##.#..###\n##...#..#.\n.#....####'
      .split('\n')
      .map(arr => arr.split(''));

    expect(compute(values)).toEqual(33);
  });
});

describe('Day 10 - 2', function() {
  const { compute } = require('./day10-2');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day10/day10-input.txt', { encoding: 'utf8' })
      .split('\n')
      .map(arr => arr.split(''));

    expect(compute(values)).toEqual(1419);
  });
});
