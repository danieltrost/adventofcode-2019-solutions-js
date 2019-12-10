const calculateAngle = function(i, j, x, y) {
  let degrees = (Math.atan2(y - j, x - i) * 180) / Math.PI + 90;

  if (degrees < 0) degrees += 360;

  return degrees;
};

exports.compute = function(values) {
  let bestCount = 0;
  let bestLocation = [0, 0];

  for (let r = 0; r < values.length; r++) {
    for (let c = 0; c < values[r].length; c++) {
      if (values[r][c] === '.') {
        continue;
      }

      const angleSet = new Set();
      let count = 0;

      for (let y = 0; y < values.length; y++) {
        for (let x = 0; x < values[y].length; x++) {
          if (values[y][x] === '.' || (x === c && y === r)) {
            continue;
          } else {
            const angle = calculateAngle(c, r, x, y);

            if (!angleSet.has(angle)) {
              angleSet.add(angle);
              count++;
            }
          }
        }
      }

      if (count > bestCount) {
        bestCount = count;
        bestLocation = [c, r];
      }
    }
  }

  let destroyedAsteroids = 0;
  let destroyedCoords = [0, 0];

  while (destroyedAsteroids < 200) {
    const angleSet = new Set();
    const coordSet = {};

    const i = bestLocation[0];
    const j = bestLocation[1];

    for (let y = 0; y < values.length; y++) {
      for (let x = 0; x < values[y].length; x++) {
        if (values[y][x] === '.' || (x === i && y === j)) {
          continue;
        } else {
          const angle = calculateAngle(i, j, x, y);

          if (!angleSet.has(angle)) {
            angleSet.add(angle);
            coordSet[angle] = {
              x,
              y,
            };
          } else {
            const xValue = Math.abs(i - x);
            const yValue = Math.abs(j - y);

            if (
              xValue + yValue <
              Math.abs(i - coordSet[angle].x) + Math.abs(j - coordSet[angle].y)
            ) {
              coordSet[angle].x = x;
              coordSet[angle].y = y;
            }
          }
        }
      }
    }

    const sortedAngles = [...angleSet].sort((a, b) => a - b);

    sortedAngles.forEach(angle => {
      const { x, y } = coordSet[angle];

      values[x][y] = '.';
      destroyedAsteroids++;

      if (destroyedAsteroids === 200) {
        destroyedCoords = [x, y];
      }
    });
  }

  return destroyedCoords[0] * 100 + destroyedCoords[1];
};
