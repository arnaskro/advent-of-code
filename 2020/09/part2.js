const input = require('./input.js').split('\n').map(Number)

const hasSumOfTwo = (list, target) => {
    for (let i = 0; i < list.length; i++)
        for (let j = i + 1; j < list.length; j++)
            if (list[i] + list[j] === target) return true

    return false
}


const findInvalidNumber = (values, preamble) => {
    for (let i = preamble; i < values.length; i++) {
        const result = hasSumOfTwo(values.slice(i - preamble,i), values[i])
        if (!result) return values[i]
    }
    throw new Error('Answer was not found')
}

const findWeakness = (list, preamble) => {
    const target = findInvalidNumber(list, preamble)

    for (let i = 0; i < list.length; i++) {
        const sums = [list[i]]
        let sum = list[i]
        for (let j = i + 1; j < list.length; j++) {
            sum = sum + list[j]
            sums.push(list[j])

            if (sum === target) {
                const result = sums.sort((a,b) => a - b)
                return result[0] + result[result.length - 1]
            } else if (sum > target) break
        }
    }

    throw new Error('Answer was not found')
}


console.log(findWeakness(input, 25))