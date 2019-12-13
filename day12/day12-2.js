const calculateGravity = function(value1, value2) {
  if (value1 > value2) return -1;
  else if (value1 < value2) return 1;
  else return 0;
};

const gcd = function(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const lcm = function(a, b) {
  return Math.abs(a * b) / gcd(a, b);
};

exports.compute = function(values) {
  const initialValues = values.map(arr => [...arr]);
  const loop = [0, 0, 0];
  let aligned = false;
  let count = 0;

  while (!aligned) {
    values.forEach((value, index) => {
      for (let j = 0; j < values.length; j++) {
        // Don't use own moon to apply gravity
        if (j === index) {
          continue;
        }

        value[3] += calculateGravity(value[0], values[j][0]);
        value[4] += calculateGravity(value[1], values[j][1]);
        value[5] += calculateGravity(value[2], values[j][2]);
      }
    });

    // Apply velocity to each position
    values.forEach(value => {
      value[0] += value[3];
      value[1] += value[4];
      value[2] += value[5];
    });

    count++;

    for (let x = 0; x < 3; x++) {
      if (loop[x]) {
        continue;
      }

      let allSame = true;
      for (let i = 0; i < values.length; i++) {
        if (
          values[i][x] !== initialValues[i][x] ||
          values[i][x + 3] !== initialValues[i][x + 3]
        ) {
          allSame = false;
        }
      }
      if (allSame) {
        loop[x] = count;
      }
    }

    aligned = !loop.some(v => v === 0);
  }

  return lcm(lcm(loop[0], loop[1]), loop[2]);
};
