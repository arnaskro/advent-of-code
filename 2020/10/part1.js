const input = require('./input.js').split('\n').map(Number).sort((a,b) => a - b)

const part1 = (list) => {
    let highest = 0, diffs = { 3: 1 }

    for (let i = 0; i < list.length; i++) {
        const diff = list[i] - highest
        if (diff <= 3) {
            diffs[diff] = (diffs[diff] || 0) + 1
            highest = list[i]
        } else break;
    }

    return diffs[1] * diffs[3]
}

console.log(part1(input))

