exports.compute = function(values, width, height) {
  const layers = [];

  for (let i = 0; i < values.length; i += width * height) {
    const imageData = values.substring(i, i + width * height);

    layers.push(imageData);
  }

  let result = [];

  for (let i = layers.length - 1; i >= 0; i--) {
    for (let j = 0; j < layers[i].length; j++) {
      if (layers[i][j] !== '2') {
        result[j] = layers[i][j];
      }
    }
  }

  return result.join('');
};
