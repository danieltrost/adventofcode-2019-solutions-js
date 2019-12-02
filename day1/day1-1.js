const fs = require("fs");

const fuelRequirements = function() {
  const values = fs
    .readFileSync("day1-input.txt", { encoding: "utf8" })
    .split("\n");
  let totalFuel = 0;

  values.forEach(value => {
    totalFuel += Math.floor(value / 3) - 2;
  });

  return totalFuel;
};

console.log(fuelRequirements());
