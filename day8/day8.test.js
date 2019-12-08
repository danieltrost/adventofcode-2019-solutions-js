const fs = require('fs');

describe('Day 8 - 1', function() {
  const { compute } = require('./day8-1');

  test('it should return expected answer for test input', function() {
    const values = fs.readFileSync('day8/day8-input.txt', { encoding: 'utf8' });

    expect(compute(values, 25, 6)).toEqual(1206);
  });
});

describe('Day 8 - 2', function() {
  const { compute } = require('./day8-2');

  test('it should return expected answer for test input', function() {
    const values = fs.readFileSync('day8/day8-input.txt', { encoding: 'utf8' });

    expect(compute(values, 25, 6)).toEqual(
      '111100011011100011001110010000000101001010010100101110000010100101000010010100000001011100101101110010000100101010010010100001111001100100100111010000'
    );
  });

  test('it should return expect answer for simple input', function() {
    const values = '0222112222120000';

    expect(compute(values, 2, 2)).toEqual('0110');
  });
});
