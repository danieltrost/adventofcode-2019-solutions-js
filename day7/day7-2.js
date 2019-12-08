class Computer {
  constructor(values, input) {
    this.values = values;
    this.position = 0;
    this.input = input;
    this.output = null;
    this.isHalted = false;
  }

  addInput(value) {
    this.input.push(value);
    this.run();
  }

  getOutput() {
    return this.output;
  }

  run() {
    let modes = [0, 0, 0];
    let opCode;

    while (!this.isHalted) {
      const arg1 = modes[0]
        ? this.position + 1
        : this.values[this.position + 1];
      const arg2 = modes[1]
        ? this.position + 2
        : this.values[this.position + 2];
      const pos = this.values[this.position + 3];

      const currentInstruction = opCode || this.values[this.position];

      // Reset modes and opcode
      modes = [0, 0, 0];
      opCode = null;

      if (currentInstruction === 3 && !this.input.length) {
        break;
      }

      switch (currentInstruction) {
        case 99:
          this.isHalted = true;
          break;
        case 1:
          this.values[pos] = this.values[arg1] + this.values[arg2];
          this.position += 4;
          break;
        case 2:
          this.values[pos] = this.values[arg1] * this.values[arg2];
          this.position += 4;
          break;
        case 3:
          this.values[this.values[this.position + 1]] = this.input.shift();
          this.position += 2;
          break;
        case 4:
          this.output = this.values[arg1];
          this.position += 2;
          break;
        case 5:
          if (this.values[arg1] !== 0) {
            this.position = this.values[arg2];
          } else {
            this.position += 3;
          }
          break;
        case 6:
          if (this.values[arg1] === 0) {
            this.position = this.values[arg2];
          } else {
            this.position += 3;
          }
          break;
        case 7:
          if (this.values[arg1] < this.values[arg2]) {
            this.values[pos] = 1;
          } else {
            this.values[pos] = 0;
          }
          this.position += 4;
          break;
        case 8:
          if (this.values[arg1] === this.values[arg2]) {
            this.values[pos] = 1;
          } else {
            this.values[pos] = 0;
          }
          this.position += 4;
          break;
        default:
          const splitInstruction = String(this.values[this.position]).split('');
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
  }
}

const generateCombinations = nums => {
  if (nums.length === 1) {
    return [nums];
  } else {
    return nums.flatMap(n =>
      generateCombinations(nums.filter(x => x !== n)).map(x => [n, ...x])
    );
  }
};

exports.compute = function(values) {
  let maxThrust = 0;

  const combinations = generateCombinations([5, 6, 7, 8, 9]);

  combinations.forEach(c => {
    const amps = c.map(
      (ampNumber, i) =>
        new Computer(values.slice(), [ampNumber, ...(i === 0 ? [0] : [])])
    );

    amps[0].run();

    const lastAmp = amps[amps.length - 1];

    while (!lastAmp.isHalted) {
      amps.forEach((a, i) =>
        amps[(i + 1) % amps.length].addInput(a.getOutput())
      );
    }

    if (maxThrust < lastAmp.getOutput()) {
      maxThrust = lastAmp.getOutput();
    }
  });

  return maxThrust;
};
