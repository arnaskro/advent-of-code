const input = require('./input.js').split('\n')

for (let i = 0;i<input.length-1;i++) {
    for (let j = i;j<input.length;j++) {
        if (+input[i] + +input[j] === 2020) {
            console.log(+input[i] * +input[j])
        }
    }
}