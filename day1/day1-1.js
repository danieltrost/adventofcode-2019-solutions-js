const fs = require('fs');

const fuelRequirements = function() {
  const values = fs
    .readFileSync('day1-input.txt', { encoding: 'utf8' })
    .split('\n');

  return values.reduce((acc, cur) => acc + Math.floor(cur / 3) - 2, 0);
};

console.log(fuelRequirements());
