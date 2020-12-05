const input = require('./part1.js').split('\n')

const decode = (boardingPass) => {
    let rowMin = 0, rowMax = 128,
        colMin = 0, colMax = 8

    boardingPass.forEach(key => {
        switch (key) {
            case "F": {
                rowMax = (rowMax - rowMin) / 2 + rowMin
                break
            }
            case "B": {
                rowMin = rowMin + (rowMax - rowMin) / 2
                break
            }
            case "L": {
                colMax = (colMax - colMin) / 2 + colMin
                break
            }
            case "R": {
                colMin = colMin + (colMax - colMin) / 2
                break
            }
            default: break;
        }
    });

    // correction
    --rowMax
    --colMax

    const seatId = rowMax * 8 + colMax
    return seatId
}

// populate seats
const seats = {}
for (let i = 0; i < 1032; i++) seats[i] = true

// filter out taken seats
const seatIds = input.map((pass) => {
    const id = decode(pass.split(""))
    delete seats[id]
    return id
})

const highestSeatId = seatIds.reduce((high, curr) => high < curr ? curr : high, 0)
const lowestSeatId = seatIds.reduce((low, curr) => low > curr ? curr : low, highestSeatId)

// remove min and max seats
const mySeat = Object.keys(seats).filter((key) => key > lowestSeatId && key < highestSeatId).map(key => +key)[0]

console.log(mySeat)