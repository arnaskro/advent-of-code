const input = require('./input.js').split('\n\n').map(x => x.split('\n'))

const sumOfYes = input.reduce((total, group) => {
    const answers = {}
    group.forEach((personAnswers) => {
        personAnswers.split('').forEach((answer) => {
            answers[answer] = true
        })
    })
    return Object.keys(answers).length + total
}, 0)

console.log(sumOfYes)