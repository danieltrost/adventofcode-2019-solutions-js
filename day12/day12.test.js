describe('Day 12 - 1', function() {
  const { compute } = require('./day12-1');

  test('it should return expected answer for test input', function() {
    const values = [
      [16, -11, 2, 0, 0, 0],
      [0, -4, 7, 0, 0, 0],
      [6, 4, -10, 0, 0, 0],
      [-3, -2, -4, 0, 0, 0],
    ];

    expect(compute(values)).toEqual(10055);
  });
});

describe('Day 12 - 2', function() {
  const { compute } = require('./day12-2');

  test('it should return expected answer for test input', function() {
    const values = [
      [16, -11, 2, 0, 0, 0],
      [0, -4, 7, 0, 0, 0],
      [6, 4, -10, 0, 0, 0],
      [-3, -2, -4, 0, 0, 0],
    ];

    expect(compute(values)).toEqual(374307970285176);
  });
});
