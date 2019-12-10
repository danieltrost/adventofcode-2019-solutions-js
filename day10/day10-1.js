const calculateAngle = function(i, j, x, y) {
  return (Math.atan2(y - j, x - i) * 180) / Math.PI;
};

exports.compute = function(values) {
  let bestLocation = 0;

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      if (values[i][j] === '.') {
        continue;
      }

      const angleSet = new Set();
      let count = 0;

      for (let x = 0; x < values.length; x++) {
        for (let y = 0; y < values[x].length; y++) {
          if (values[x][y] === '.' || (x === i && y === j)) {
            continue;
          } else {
            const angle = calculateAngle(i, j, x, y);

            if (!angleSet.has(angle)) {
              angleSet.add(angle);
              count++;
            }
          }
        }
      }

      if (count > bestLocation) {
        bestLocation = count;
      }
    }
  }

  return bestLocation;
};
