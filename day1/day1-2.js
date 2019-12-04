const calculateFuelRequirements = function(mass) {
  const fuelMass = Math.floor(mass / 3) - 2;
  let sum = 0;

  if (fuelMass > 0) {
    sum += fuelMass + calculateFuelRequirements(fuelMass);
  }

  return sum;
};

exports.fuelRequirements = function(values) {
  return values.reduce((acc, cur) => acc + calculateFuelRequirements(cur), 0);
};
