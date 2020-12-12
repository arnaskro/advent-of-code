const input = require('./input.js').split('\n')

const answer = input.reduce((ship, curr) => {
    const [,action,rawValue] = curr.match(/(\D)(\d+)/)
    let value = +rawValue

    switch(action) {
        case 'E': ship.wx += value; break;
        case 'N': ship.wy -= value; break;
        case 'S': ship.wy += value; break;
        case 'W': ship.wx -= value; break;
        case 'F': {
            while(value){
                ship.x += ship.wx
                ship.y += ship.wy
                value--
            }
            break;
        }
        default: {
            while(value){
                let {wx,wy} = ship
                ship.wx = action === 'R' ? -wy : wy
                ship.wy =  action === 'L' ? -wx : wx
                value-=90
            }
            break;
        }
    }

    return ship
}, { wx: 10, wy: -1, x: 0, y: 0 })

console.log(Math.abs(answer.x)+Math.abs(answer.y))