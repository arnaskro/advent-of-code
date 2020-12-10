const input = require('./input.js').split('\n').map(Number).sort((a,b) => a - b)

let highest = 0, index

for (let i = 0; i < input.length; i++) {
    const diff = input[i] - highest
    if (diff <= 3) {
        highest = input[i]
        index = i
    } else break;
}

const list = [0, ...input.slice(0, index+1), highest + 3]

const answer = list.reduce((counter, _, i) => {
    let next = i + 1
    while(list[next] <= list[i] + 3) counter[next] = (counter[next++] || 0) + counter[i];
    return counter
}, {0: 1})[list.length - 1]

console.log(answer)