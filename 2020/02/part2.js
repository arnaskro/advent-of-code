const input = require('./input.js').split('\n').filter((x) => {
    const [_, pos1, pos2, char, password] = x.match(/(\d*)-(\d*) (.): (.*)/)
    const firstMatch = password[+pos1-1] === char
    const secondMatch = password[+pos2-1] === char
    return (firstMatch && !secondMatch) || (!firstMatch && secondMatch)
})

console.log(input.length)

