const getPattern = function(count) {
  const pattern = [0, 1, 0, -1];
  let result = [];

  for (let i = 0; i < pattern.length; i++) {
    let patternCount = [];

    for (let j = 0; j < count; j++) {
      patternCount.push(pattern[i]);
    }

    result = [...result, ...patternCount];
  }

  const endValue = result.shift();

  return [...result, endValue];
};

exports.compute = function(values) {
  const output = [];

  for (let c = 0; c < 100; c++) {
    for (let i = 0; i < values.length; i++) {
      const pattern = getPattern(i + 1);
      let result = 0;

      for (let j = 0; j < values.length; j++) {
        result += values[j] * pattern[j % pattern.length];
      }

      output[i] = Math.abs(result) % 10;
    }

    values = output;
  }

  return output.slice(0, 8).join('');
};
