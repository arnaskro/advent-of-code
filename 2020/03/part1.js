const input = require('./input.js').split('\n')
const map = input.map((line) => line.split(''))
const pathLength = input[0].length

let x = 0, y = 0, trees = 0

const step = () => {
    x = (x + 3) % pathLength;
    y++;
}

while(y < input.length) {
    if (map[y][x] === '#') trees++
    step()
}

console.log(trees)


