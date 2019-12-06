exports.compute = function(values) {
  const map = {};

  for (var i = 0; i < values.length; i++) {
    const orbits = values[i].split(')');

    if (map[orbits[0]]) {
      map[orbits[0]] = [...map[orbits[0]], orbits[1]];
    } else {
      map[orbits[0]] = [orbits[1]];
    }
  }

  let lowestCount = null;
  let currentOrbitYou = 'YOU';
  let currentOrbitSan = 'SAN';
  let youSet = new Set();
  let sanSet = new Set();

  // find first common orbit between YOU and SAN
  while ([...youSet].filter(v => sanSet.has(v)).length === 0) {
    Object.entries(map).forEach(([key, value]) => {
      if (value.includes(currentOrbitYou)) {
        currentOrbitYou = key;
        youSet.add(key);
      } else if (value.includes(currentOrbitSan)) {
        sanSet.add(key);
        currentOrbitSan = key;
      }
    });
  }

  [...youSet].forEach((v, i) => {
    let count = i;

    [...sanSet].forEach(sv => {
      if (v === sv && (count < lowestCount || !lowestCount)) {
        lowestCount = count;
      }

      count++;
    });

    count++;
  });

  return lowestCount;
};
