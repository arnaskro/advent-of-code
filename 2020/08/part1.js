const input = require('./input.js').split('\n')

const instructions = input.map((raw) => {
   const [_, operation, plusMinus, number] = raw.match(/(\w{3}) (\+|-)(\d*)/)
   const argument = parseInt(`${plusMinus === "-" ? "-" : ""}${number}`)
   return {operation, argument}
})

let accumulator = 0, index = 0

while(true) {
    const instruction = instructions[index]
    if (instruction && instruction !== 'stop') {
        const {operation, argument} = instruction
        instructions[index] = "stop"
        switch(operation) {
            case "jmp": index += argument; break;
            case "acc": accumulator += argument;
            case "nop": index++; break;
        }
    } else {
        break;
    }
}

console.log(accumulator)

