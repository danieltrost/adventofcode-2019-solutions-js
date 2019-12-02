const fs = require("fs");

const calculateFuelRequirements = function(mass) {
  return Math.floor(mass / 3) - 2;
};

const fuelRequirements = function() {
  const values = fs
    .readFileSync("day1-input.txt", { encoding: "utf8" })
    .split("\n");
  let totalFuel = 0;

  values.forEach(value => {
    let currentFuel = calculateFuelRequirements(value);

    while (currentFuel > 0) {
      totalFuel += currentFuel;

      currentFuel = calculateFuelRequirements(currentFuel);
    }
  });

  return totalFuel;
};

console.log(fuelRequirements());
