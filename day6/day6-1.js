const count = function(map, value) {
  const results = map[value];
  let totalCount = 0;

  if (results) {
    totalCount += results.length;

    results.forEach(v => {
      totalCount += count(map, v);
    });
  }

  return totalCount;
};

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

  let totalCount = 0;

  Object.entries(map).forEach(([key, value]) => {
    totalCount += count(map, key);
  });

  return totalCount;
};
