const input = require('./input.js').split('\n')
const earliest = +input[0]
const times = input[1].split(',').filter((id) => id !== 'x').map(Number)

const part1 = () => {
    let curr = earliest

    while (true) {
        for (let i = 0; i < times.length; i++) {
            if (curr%times[i] === 0) {
                return (curr - earliest) * times[i]
            }
        }
        curr++
    }
}

console.log(part1())