const input = require('./input.js').split('\n').map((row) => row.split(''))

const countTotalOccupiedSeats = (list) => list.reduce((total, curr) => total + curr.filter(seat => seat === '#').length, 0)

const countVisibleFreeSeats = (list, row, col) => {
    let seats = 8, level = 1
    let directionsToLook = ['l', 'r', 'u', 'd', 'lu', 'ld', 'ru', 'rd']

    while (directionsToLook.length) {
        const removeDir = (dirToRemove) => directionsToLook = directionsToLook.filter((dir) => dir !== dirToRemove)

        directionsToLook.forEach((dir) => {
            switch (dir) {
                case "u": {
                    if (!list[row-level] || (list[row-level] && !list[row-level][col])) removeDir('u')
                    else if (list[row-level][col] === '#') {seats--;removeDir('u')}
                    else if (list[row-level][col] === 'L') {removeDir('u')}
                    break;
                }
                case "d": {
                    if (!list[row+level] || (list[row+level] && !list[row+level][col])) removeDir('d')
                    else if (list[row+level][col] === '#') { seats--;removeDir('d')}
                    else if (list[row+level][col] === 'L') { removeDir('d')}
                    break;
                }
                case "l": {
                    if (!list[row][col-level]) removeDir('l')
                    else if (list[row][col-level] === "#") {seats--;removeDir('l')}
                    else if (list[row][col-level] === "L") {removeDir('l')}
                    break;
                }
                case "r": {
                    if (!list[row][col+level]) removeDir('r')
                    else if (list[row][col+level] === "#") {seats--;removeDir('r')}
                    else if (list[row][col+level] === "L") {removeDir('r')}
                    break;
                }
                case "lu": {
                    if (!list[row-level] || (list[row-level] && !list[row-level][col-level])) removeDir('lu')
                    else if (list[row-level][col-level] === '#') {seats--;removeDir('lu')}
                    else if (list[row-level][col-level] === 'L') {removeDir('lu')}
                    break;
                }
                case "ru": {
                    if (!list[row-level] || (list[row-level] && !list[row-level][col+level])) removeDir('ru')
                    else if (list[row-level][col+level] === '#') {seats--;removeDir('ru')}
                    else if (list[row-level][col+level] === 'L') {removeDir('ru')}
                    break;
                }
                case "ld": {
                    if (!list[row+level] || (list[row+level] && !list[row+level][col-level])) removeDir('ld')
                    else if (list[row+level][col-level] === '#') {seats--;removeDir('ld')}
                    else if (list[row+level][col-level] === 'L') {removeDir('ld')}
                    break;
                }
                case "rd": {
                    if (!list[row+level] || (list[row+level] && !list[row+level][col+level])) removeDir('rd')
                    else if (list[row+level][col+level] === '#') {seats--;removeDir('rd')}
                    else if (list[row+level][col+level] === 'L') {removeDir('rd')}
                    break;
                }
                default: break;
            }
        })

        level++
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
                const freeSeats = countVisibleFreeSeats(list, y, x)
                if (status === 'L' && freeSeats === 8) newList[y][x] = '#'
                else if (status === '#' && freeSeats <= 3) newList[y][x] = 'L'
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
