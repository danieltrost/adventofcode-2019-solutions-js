const Intcode = function(input, input2, values) {
  values = [...values];

  let position = 0;
  let currentInputCount = 0;
  let modes = [0, 0, 0];

  let isHalted = false;
  let output;
  let opCode;

  while (!isHalted) {
    const arg1 = modes[0] ? position + 1 : values[position + 1];
    const arg2 = modes[1] ? position + 2 : values[position + 2];
    const pos = values[position + 3];

    const currentInstruction = opCode || values[position];

    // Reset modes and opcode
    modes = [0, 0, 0];
    opCode = null;

    switch (currentInstruction) {
      case 99:
        isHalted = true;
        break;
      case 1:
        values[pos] = values[arg1] + values[arg2];
        position += 4;
        break;
      case 2:
        values[pos] = values[arg1] * values[arg2];
        position += 4;
        break;
      case 3:
        values[values[position + 1]] = currentInputCount ? input2 : input;
        currentInputCount++;
        position += 2;
        break;
      case 4:
        output = values[arg1];
        position += 2;
        break;
      case 5:
        if (values[arg1] !== 0) {
          position = values[arg2];
        } else {
          position += 3;
        }
        break;
      case 6:
        if (values[arg1] === 0) {
          position = values[arg2];
        } else {
          position += 3;
        }
        break;
      case 7:
        if (values[arg1] < values[arg2]) {
          values[pos] = 1;
        } else {
          values[pos] = 0;
        }
        position += 4;
        break;
      case 8:
        if (values[arg1] === values[arg2]) {
          values[pos] = 1;
        } else {
          values[pos] = 0;
        }
        position += 4;
        break;
      default:
        const splitInstruction = String(values[position]).split('');
        const instructionLength = splitInstruction.length;
        opCode = Number(splitInstruction.slice(-2).join(''));

        for (var i = 0; i < 3; i++) {
          const value = splitInstruction[instructionLength - 3 - i];

          if (value !== undefined) {
            modes[i] = Number(value);
          } else {
            modes[i] = 0;
          }
        }
        break;
    }
  }

  return output;
};

exports.compute = function(values) {
  const recur = function(options, prevInput) {
    let maxThrust = prevInput;

    options.forEach(v => {
      const res = recur(
        options.filter(o => o !== v),
        Intcode(v, prevInput, values)
      );

      if (res > maxThrust) {
        maxThrust = res;
      }
    });

    return maxThrust;
  };

  return recur([0, 1, 2, 3, 4], 0);
};
