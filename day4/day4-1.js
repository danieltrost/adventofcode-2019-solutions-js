const fs = require('fs');

const compute = function() {
  const start = 402328;
  const end = 864247;
  let count = 0;

  for (var i = start; i <= end; i++) {
    const values = String(i).split('');
    const isIncrementing = values.every(
      (v, i) => values[i + 1] === undefined || v <= values[i + 1]
    );

    if (isIncrementing) {
      const hasTwoOfValue = values.some(
        v => values.filter(val => val === v).length >= 2
      );

      if (hasTwoOfValue) {
        count++;
      }
    }
  }

  return count;
};

console.log(compute());
