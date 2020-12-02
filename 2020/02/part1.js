const input = require('./input.js').split('\n').filter((x) => {
    const [_, min, max, char, password] = x.match(/(\d*)-(\d*) (.): (.*)/)
    const occurences = password.split(char).length - 1
    return occurences >= +min && occurences <= +max
})

console.log(input.length)

