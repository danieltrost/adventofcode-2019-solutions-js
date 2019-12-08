exports.compute = function(values, width, height) {
  const layers = [];

  for (let i = 0; i < values.length; i += width * height) {
    const imageData = values.substring(i, i + width * height);

    let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;

    for (let j = 0; j < imageData.length; j++) {
      switch (imageData[j]) {
        case '0':
          zeroCount++;
          break;
        case '1':
          oneCount++;
          break;
        case '2':
          twoCount++;
          break;
      }
    }

    layers.push([imageData, zeroCount, oneCount * twoCount]);
  }

  let minValue = null;
  let oneTimesTwoCount = null;

  layers.forEach(layer => {
    if (!minValue || minValue > layer[1]) {
      minValue = layer[1];
      oneTimesTwoCount = layer[2];
    }
  });

  return oneTimesTwoCount;
};
