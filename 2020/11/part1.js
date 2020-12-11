const input = require('./input.js').split('\n').map((row) => row.split(''))

const countTotalOccupiedSeats = (list) => list.reduce((total, curr) => total + curr.filter(seat => seat === '#').length, 0)

const countAdjacentFreeSeats = (list, row, col) => {
    let seats = 8;

    if (list[row][col-1] === '#') seats--
    if (list[row][col+1] === '#') seats--
    if (list[row-1]) {
        if (list[row-1][col-1] === '#') seats--
        if (list[row-1][col] === '#') seats--
        if (list[row-1][col+1] === '#') seats--
    }
    if (list[row+1]) {
        if (list[row+1][col-1] === '#') seats--
        if (list[row+1][col] === '#') seats--
        if (list[row+1][col+1] === '#') seats--
    }

    return seats
}

const run = (list) => {
    // deep clone
    let newList = JSON.parse(JSON.stringify(list));

    for (let y = 0; y < list.length; y++) {
        for (let x = 0; x < list[0].length; x++) {
            const status = list[y][x]
            if (status !== '.') {
                const freeSeats = countAdjacentFreeSeats(list, y, x)
                if (status === 'L' && freeSeats === 8) newList[y][x] = '#'
                else if (status === '#' && freeSeats <= 4) newList[y][x] = 'L'
            }
        }
    }

    return newList
}

const getAnswer = (input) => {
    let prev = [], curr = input

    while(JSON.stringify(prev) !== JSON.stringify(curr)) {
        prev = curr
        curr = run(curr)
    }

    return countTotalOccupiedSeats(curr)
}

console.log(getAnswer(input))
