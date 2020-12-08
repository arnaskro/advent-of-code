const input = require('./input.js').split('\n')

const getInput = () => input.map((raw) => {
    const [_, operation, plusMinus, number] = raw.match(/(\w{3}) (\+|-)(\d*)/)
    const argument = parseInt(`${plusMinus === "-" ? "-" : ""}${number}`)
    return {operation, argument}
 })
const instructions = getInput()

const trySolving = (data) => {
    let accumulator = 0, index = 0

    while(true) {
        const instruction = data[index]
        if (!instruction) return accumulator
        else if (instruction !== 'stop') {
            const {operation, argument} = instruction
            data[index] = "stop"
            switch(operation) {
                case "jmp": index += argument; break;
                case "acc": accumulator += argument;
                case "nop": index++; break;
            }
        } else return false
    }
}

for (let i = 0; i < instructions.length; i++) {
    const {operation, argument} = instructions[i]
    if (operation === "nop" || operation === "jmp") {
        const res = trySolving({...instructions, [i]: { argument, operation: operation === "nop" ? "jmp" : "nop"}})

        if (res) {
            console.log(res)
            return
        }
    }
}


