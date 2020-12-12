const input = require('./input.js').split('\n')

const rotate = (dir, right = true) => {
    switch (dir) {
        case 'east': return right ? 'south' : 'north'
        case 'south': return right ? 'west' : 'east'
        case 'west': return right ? 'north' : 'south'
        case 'north': return right ? 'east' : 'west'
    }
}

const answer = input.reduce((x, curr) => {
    const [,action,rawValue] = curr.match(/(\D)(\d+)/)
    let value = +rawValue

    switch (action) {
        case "N": x.north += value; break;
        case "S": x.north -= value; break;
        case "E": x.east += value; break;
        case "W": x.east -= value; break;
        case "F": {
            switch (x.facing) {
                case 'east': x.east += value; break;
                case 'west': x.east -= value; break;
                case 'north': x.north += value; break;
                case 'south': x.north -= value; break;
            }
            break;
        }
        default: {
            while(value > 0) {
                x.facing = rotate(x.facing, action === 'R');
                value -= 90
            }
            break;
        }
    }

    return x
}, { east: 0, north: 0, facing: 'east' })

console.log(Math.abs(answer.east) + Math.abs(answer.north))