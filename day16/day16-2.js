exports.compute = function(values) {
  const position = parseInt(values.substring(0, 7));

  values = values.substring(position);

  for (let c = 0; c < 100; c++) {
    const output = Array(values.length + 1).fill(0);

    for (let i = values.length - 1; i >= 0; i--) {
      output[i] = (parseInt(values[i]) + output[i + 1]) % 10;
    }

    values = output;
  }

  return values.slice(0, 8).join('');
};
