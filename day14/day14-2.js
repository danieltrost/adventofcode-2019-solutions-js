exports.compute = function(values) {
  let obj = {};
  // values
  values.forEach(value => {
    const sides = value.split('=>');

    const leftSide = sides[0].split(',');
    const rightSide = sides[1].trim().split(' ');

    rightSide[0] = Number(rightSide[0]);

    let equation = {
      amount: rightSide[0],
      input: [],
    };

    leftSide.forEach(v => {
      v = v.trim();
      v = v.split(' ');

      const number = Number(v[0]);
      const value = v[1];

      equation.input.push([number, value]);
    });

    obj[rightSide[1]] = equation;
  });

  let extra = {};
  let fuelCount = 0;
  let oreCount = 1000000000000;

  function findOre(input, count = 1) {
    if (input === 'ORE') {
      return count;
    }

    if (!extra[input]) {
      extra[input] = 0;
    }

    const reusable = Math.min(count, extra[input]);

    count -= reusable;
    extra[input] -= reusable;

    const { amount, input: inputs } = obj[input];

    let ore = 0;
    inputs.forEach(value => {
      ore += findOre(value[1], Math.ceil(count / amount) * value[0]);
    });

    extra[input] += Math.ceil(count / amount) * amount - count;

    return ore;
  }

  while (oreCount > 0) {
    oreCount -= findOre('FUEL');
    if (oreCount > 0) {
      fuelCount++;
    }
  }

  return fuelCount;
};
