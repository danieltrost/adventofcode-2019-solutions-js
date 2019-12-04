exports.fuelRequirements = function(values) {
  return values.reduce((acc, cur) => acc + Math.floor(cur / 3) - 2, 0);
};
