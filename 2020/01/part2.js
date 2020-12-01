const input = require('./input.js').split('\n')

for (let i = 0;i<input.length-2;i++) {
    for (let j = i;j<input.length-1;j++) {
        for (let k = j;k<input.length;k++) {
            if (+input[i] + +input[j] + +input[k] === 2020) {
                console.log(+input[i] * +input[j] * +input[k])
            }
        }
    }
}