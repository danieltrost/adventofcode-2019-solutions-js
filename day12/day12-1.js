const calculateGravity = function(value1, value2) {
  if (value1 > value2) return -1;
  else if (value1 < value2) return 1;
  else return 0;
};

exports.compute = function(values) {
  let energy = 0;

  for (let i = 0; i < 1000; i++) {
    // Calculate gravity on moons
    values.forEach((value, index) => {
      for (let j = 0; j < values.length; j++) {
        // Don't use own moon to apply gravity
        if (j === index) {
          continue;
        }

        const xGravity = calculateGravity(value[0], values[j][0]);
        const yGravity = calculateGravity(value[1], values[j][1]);
        const zGravity = calculateGravity(value[2], values[j][2]);

        value[3] += xGravity;
        value[4] += yGravity;
        value[5] += zGravity;
      }
    });

    // Apply velocity to each position
    values.forEach(value => {
      value[0] += value[3];
      value[1] += value[4];
      value[2] += value[5];
    });
  }

  // Calculate potential and kinetic energy
  values.forEach(value => {
    const potential =
      Math.abs(value[0]) + Math.abs(value[1]) + Math.abs(value[2]);
    const kinetic =
      Math.abs(value[3]) + Math.abs(value[4]) + Math.abs(value[5]);

    energy += potential * kinetic;
  });

  return energy;
};
