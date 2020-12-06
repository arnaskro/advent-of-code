const input = require('./input.js').split('\n\n').map(x => x.split('\n'))

const sumOfYes = input.reduce((total, group) => {
    const answers = {}
    group.forEach((personAnswers) => {
        personAnswers.split('').forEach((answer) => {
            if (!answers[answer]) answers[answer] = 1
            else answers[answer]++
        })
    })
    return Object.values(answers).filter(answer => answer === group.length).length + total
}, 0)

console.log(sumOfYes)