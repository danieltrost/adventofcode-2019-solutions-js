const fs = require('fs');

const Intcode = function() {
  const values = fs
    .readFileSync('day2-input.txt', { encoding: 'utf8' })
    .split(',')
    .map(n => Number(n));
  let isHalted = false;
  let position = 0;

  // Replace values
  values[1] = 12;
  values[2] = 2;

  while (!isHalted) {
    switch (values[position]) {
      case 99:
        isHalted = true;
        break;
      case 1:
        values[values[position + 3]] =
          values[values[position + 1]] + values[values[position + 2]];
        break;
      case 2:
        values[values[position + 3]] =
          values[values[position + 1]] * values[values[position + 2]];
        break;
    }

    position += 4;
  }

  return values[0];
};

console.log(Intcode());
