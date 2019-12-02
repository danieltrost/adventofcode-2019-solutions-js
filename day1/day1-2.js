const fs = require('fs');

const calculateFuelRequirements = function(mass) {
  const fuelMass = Math.floor(mass / 3) - 2;
  let sum = 0;

  if (fuelMass > 0) {
    sum += fuelMass + calculateFuelRequirements(fuelMass);
  }

  return sum;
};

const fuelRequirements = function() {
  const values = fs
    .readFileSync('day1-input.txt', { encoding: 'utf8' })
    .split('\n');

  return values.reduce((acc, cur) => acc + calculateFuelRequirements(cur), 0);
};

console.log(fuelRequirements());
