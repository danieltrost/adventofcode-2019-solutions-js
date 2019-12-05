exports.determineNounAndVerb = function(values) {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      if (Intcode([...values], noun, verb) === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
};

const Intcode = function(values, noun, verb) {
  let isHalted = false;
  let position = 0;

  // Replace values
  values[1] = noun;
  values[2] = verb;

  while (!isHalted) {
    switch (values[position]) {
      case 99:
        isHalted = true;
        break;
      case 1:
        values[values[position + 3]] =
          values[values[position + 1]] + values[values[position + 2]];
        break;
      case 2:
        values[values[position + 3]] =
          values[values[position + 1]] * values[values[position + 2]];
        break;
    }

    position += 4;
  }

  return values[0];
};
