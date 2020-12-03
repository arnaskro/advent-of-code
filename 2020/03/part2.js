const input = require('./input.js').split('\n')
const map = input.map((line) => line.split(''))
const pathLength = input[0].length

let x = 0, y = 0, trees = 0, totalTrees = 1

const step = (right, down) => {
    x = (x + right) % pathLength;
    y += down;
}

const run = (right, down) => {
    x = 0; y = 0; trees = 0
    while(y < input.length) {
        if (map[y][x] === '#') trees++
        step(right, down)
    }
    totalTrees *= trees
}

run(1, 1)
run(3, 1)
run(5, 1)
run(7, 1)
run(1, 2)

console.log(totalTrees)
