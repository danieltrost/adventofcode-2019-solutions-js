const fs = require('fs');

describe('Day 3 - 1', function() {
  const { compute } = require('./day3-1');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day3/day3-input.txt', { encoding: 'utf8' })
      .split('\n');

    expect(compute(values)).toEqual(721);
  });

  test('it should return expected answer for simple test input', function() {
    const simpleInput = [
      [
        [
          'R75,D30,R83,U83,L12,D49,R71,U7,L72',
          'U62,R66,U55,R34,D71,R55,D58,R83',
        ],
        159,
      ],
      [
        [
          'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
          'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7',
        ],
        135,
      ],
    ];

    simpleInput.forEach(arr => {
      expect(compute(arr[0])).toEqual(arr[1]);
    });
  });
});

describe('Day 3 - 1', function() {
  const { compute } = require('./day3-2');

  test('it should return expected answer for test input', function() {
    const values = fs
      .readFileSync('day3/day3-input.txt', { encoding: 'utf8' })
      .split('\n');

    expect(compute(values)).toEqual(7388);
  });

  test('it should return expected answer for simple test input', function() {
    const simpleInput = [
      [
        [
          'R75,D30,R83,U83,L12,D49,R71,U7,L72',
          'U62,R66,U55,R34,D71,R55,D58,R83',
        ],
        610,
      ],
      [
        [
          'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
          'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7',
        ],
        410,
      ],
    ];

    simpleInput.forEach(arr => {
      expect(compute(arr[0])).toEqual(arr[1]);
    });
  });
});
