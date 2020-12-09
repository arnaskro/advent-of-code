const input = require('./input.js').split('\n').map(Number)

const hasSumOfTwo = (list, target) => {
    for (let i = 0; i < list.length; i++)
        for (let j = i + 1; j < list.length; j++)
            if (list[i] + list[j] === target) return true

    return false
}


const part1 = (values, preamble) => {
    for (let i = preamble; i < values.length; i++) {
        const result = hasSumOfTwo(values.slice(i - preamble,i), values[i])
        if (!result) return values[i]
    }
    throw new Error('Answer was not found')
}


console.log(part1(input, 25))