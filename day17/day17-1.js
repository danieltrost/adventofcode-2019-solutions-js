class Computer {
  constructor(values, input) {
    const zeroFilled = new Array(10000).fill(0);

    this.values = [...values, ...zeroFilled];
    this.position = 0;
    this.input = input;
    this.output = [];
    this.isHalted = false;
    this.relativeBase = 0;
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
      let arg1;
      let arg2;
      let pos;

      if (modes[0] === 0) {
        arg1 = this.values[this.position + 1];
      } else if (modes[0] === 1) {
        arg1 = this.position + 1;
      } else if (modes[0] === 2) {
        arg1 = this.values[this.position + 1] + this.relativeBase;
      }

      if (modes[1] === 0) {
        arg2 = this.values[this.position + 2];
      } else if (modes[1] === 1) {
        arg2 = this.position + 2;
      } else if (modes[1] === 2) {
        arg2 = this.values[this.position + 2] + this.relativeBase;
      }

      if (modes[2] === 0) {
        pos = this.values[this.position + 3];
      } else if (modes[2] === 1) {
        pos = this.position + 3;
      } else if (modes[2] === 2) {
        pos = this.values[this.position + 3] + this.relativeBase;
      }

      const currentInstruction = opCode || this.values[this.position];

      // Reset modes and opcode
      modes = [0, 0, 0];
      opCode = null;

      if (currentInstruction === 3 && !this.input.length) {
        break;
      }

      // console.log(currentInstruction);

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
          this.values[arg1] = this.input.shift();
          this.position += 2;
          break;
        case 4:
          this.output.push(this.values[arg1]);
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
        case 9:
          this.relativeBase += this.values[arg1];
          this.position += 2;
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

exports.compute = function(values) {
  const computer = new Computer(values, []);
  const scafolding = [''];
  let currentIndex = 0;

  computer.run();

  // Generate scafolding
  for (let i = 0; i < computer.output.length; i++) {
    switch (computer.output[i]) {
      case 10:
        scafolding.push('');
        currentIndex++;
        break;
      case 35:
        scafolding[currentIndex] = scafolding[currentIndex].concat('#');
        break;
      case 46:
        scafolding[currentIndex] = scafolding[currentIndex].concat('.');
        break;
    }
  }

  // Find intersections
  let sumOfAlignment = 0;
  for (let row = 1; row < scafolding.length - 1; row++) {
    for (let col = 1; col < scafolding[row].length - 1; col++) {
      if (scafolding[row][col] === '#') {
        if (
          scafolding[row + 1][col] === '#' &&
          scafolding[row - 1][col] === '#' &&
          scafolding[row][col + 1] === '#' &&
          scafolding[row][col - 1] === '#'
        ) {
          sumOfAlignment += row * col;
        }
      }
    }
  }

  return sumOfAlignment;
};
