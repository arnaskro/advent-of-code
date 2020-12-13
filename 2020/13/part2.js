// Chinese Remainder Theorem (CRT)
// https://www.geeksforgeeks.org/chinese-remainder-theorem-set-1-introduction/

const input = require('./input.js').split('\n')
const data = input[1].split(',')
    .map((id, pos) => {
        if (id === 'x') return false
        else return ({
            mod: +id,
            remainder: (id - (pos % id)) % id
        })
    })
    .filter(Boolean)
    .sort((a, b) => b.mod - a.mod)


const part2 = () => {
    let t = 0;
    let step = 1;
    for (let pos = 0; pos < data.length; pos++) {
        const { mod, remainder } = data[pos]
        while (t % mod !== remainder) t += step
        step *= mod
    }
    return t
}

console.log(part2())