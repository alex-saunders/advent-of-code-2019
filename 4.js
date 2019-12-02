const read = (mem, pos) => {
  const opcode = mem[pos];
  let num1 = mem[mem[pos + 1]];
  let num2 = mem[mem[pos + 2]];
  let storePos = mem[pos + 3];
  let res;

  if (opcode === 1) {
    res = num1 + num2;
  }
  if (opcode === 2) {
    res = num1 * num2;
  }
  mem[storePos] = res;
};

const exec = (input, noun, verb) => {
  let memory = [...input];
  let instructionPointer = 0;
  memory[1] = noun;
  memory[2] = verb;

  while (memory[instructionPointer] !== 99) {
    read(memory, instructionPointer);
    instructionPointer += 4;
  }

  return memory;
};

let input = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,5,23,1,6,23,27,1,27,5,31,2,31,10,35,2,35,6,39,1,39,5,43,2,43,9,47,1,47,6,51,1,13,51,55,2,9,55,59,1,59,13,63,1,6,63,67,2,67,10,71,1,9,71,75,2,75,6,79,1,79,5,83,1,83,5,87,2,9,87,91,2,9,91,95,1,95,10,99,1,9,99,103,2,103,6,107,2,9,107,111,1,111,5,115,2,6,115,119,1,5,119,123,1,123,2,127,1,127,9,0,99,2,0,14,0'
  .split(',')
  .map(num => parseInt(num, 10));

let output;
for (let noun = 0; noun < 100; noun += 1) {
  for (let verb = 0; verb < 100; verb += 1) {
    output = exec(input, noun, verb);
    if (output[0] === 19690720) break;
  }
  if (output[0] === 19690720) break;
}

console.log(100 * output[1] + output[2]);
