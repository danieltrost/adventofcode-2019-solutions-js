const fs = require('fs');

const generateSet = function(lines) {
  const set = new Set();
  let currentX = 0;
  let currentY = 0;

  for (var i = 0; i < lines.length; i++) {
    const direction = lines[i].substring(0, 1);
    const distance = Number(lines[i].substring(1, lines[i].length));

    for (var j = 0; j < distance; j++) {
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

      set.add(coords);
    }
  }

  return set;
};

const compute = function() {
  const values = fs
    .readFileSync('day3-input.txt', { encoding: 'utf8' })
    .split('\n');

  const line1 = values[0].split(',');
  const line2 = values[1].split(',');

  const line1Set = generateSet(line1);
  const line2Set = generateSet(line2);

  const crossedSet = new Set([...line1Set].filter(c => line2Set.has(c)));

  let lowestNumber = null;

  Array.from(crossedSet).forEach(coords => {
    const coordsSplit = coords.split(',');
    const val = Math.abs(coordsSplit[0]) + Math.abs(coordsSplit[1]);

    if (!lowestNumber || val < lowestNumber) {
      lowestNumber = val;
    }
  });

  return lowestNumber;
};

console.log(compute());
