const input = require('./input.js').split('\n')

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

const seatIds = input.map((pass) => decode(pass.split("")))
const highestSeatId = seatIds.reduce((high, curr) => high < curr ? curr : high, 0)

console.log(highestSeatId)