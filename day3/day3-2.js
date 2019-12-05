const generateSet = function(lines, c, lowest) {
  const set = new Set();
  let currentX = 0;
  let currentY = 0;
  let travelDistance = 0;

  for (var i = 0; i < lines.length; i++) {
    const direction = lines[i].substring(0, 1);
    const distance = Number(lines[i].substring(1, lines[i].length));

    for (var j = 0; j < distance; j++) {
      if (lowest !== null && travelDistance > lowest) {
        return travelDistance;
      }

      travelDistance++;

      switch (direction) {
        case 'L':
          currentX--;
          break;
        case 'R':
          currentX++;
          break;
        case 'U':
          currentY++;
          break;
        case 'D':
          currentY--;
          break;
      }

      const coords = `${currentX},${currentY}`;

      if (c && coords === c) {
        return travelDistance;
      }

      set.add(coords);
    }
  }

  return set;
};

exports.compute = function(values) {
  const line1 = values[0].split(',');
  const line2 = values[1].split(',');

  const line1Set = generateSet(line1);
  const line2Set = generateSet(line2);

  const crossedSet = new Set([...line1Set].filter(c => line2Set.has(c)));

  let lowestNumber = null;

  Array.from(crossedSet).forEach(coords => {
    const intersectionDistance =
      generateSet(line1, coords, lowestNumber) +
      generateSet(line2, coords, lowestNumber);

    if (!lowestNumber || intersectionDistance < lowestNumber) {
      lowestNumber = intersectionDistance;
    }
  });

  return lowestNumber;
};
