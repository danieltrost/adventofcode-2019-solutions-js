const Intcode = function(
  input,
  values,
  position = 0,
  instruction = null,
  modes = [0, 0, 0]
) {
  const arg1 = modes[0] ? position + 1 : values[position + 1];
  const arg2 = modes[1] ? position + 2 : values[position + 2];
  const pos = values[position + 3];

  const currentInstruction = instruction || values[position];

  switch (currentInstruction) {
    case 99:
      return;
    case 1:
      values[pos] = values[arg1] + values[arg2];
      Intcode(input, values, position + 4);
      break;
    case 2:
      values[pos] = values[arg1] * values[arg2];
      Intcode(input, values, position + 4);
      break;
    case 3:
      values[values[position + 1]] = input;
      Intcode(input, values, position + 2);
      break;
    case 4:
      console.log(values[arg1]);
      Intcode(input, values, position + 2);
      break;
    default:
      const splitInstruction = String(values[position]).split('');
      const instructionLength = splitInstruction.length;
      const opCode = Number(splitInstruction.slice(-2).join(''));

      for (var i = 0; i < 3; i++) {
        const value = splitInstruction[instructionLength - 3 - i];

        if (value !== undefined) {
          modes[i] = Number(value);
        } else {
          modes[i] = 0;
        }
      }
      Intcode(input, values, position, opCode, modes);
      break;
  }

  return;
};

exports.Intcode = Intcode;
