const input = require('./input.js').split('\n')

// process input
const rules = input.reduce((all, curr) => {
    const [mainBagType, other] = curr.split(' bags contain ')
    if (other === 'no other bags.') return all
    all[mainBagType] = {}
    const otherTypes = other.match(/\d{1,} [a-z]* [a-z]*/g)
    otherTypes.forEach((typeInput) => {
        const [_, count, type] = typeInput.match(/(\d{1,}) ([a-z]* [a-z]*)/)
        all[mainBagType][type] = +count
    })

    return all
}, {})

let curr = ["shiny gold"] ,alreadyChecked = [], count = 0

while (curr.length) {
    const selected = curr, newList = []

    // check if selected bags contain the required bags
    Object.entries(rules).forEach(([key, obj]) => {
        if (selected.filter((bag) => !!obj[bag]).length) {
            newList.push(key)
        }
    })

    // keep track of types that were already checkd
    alreadyChecked = [...alreadyChecked, ...curr]
    // filter out types that were already checked
    curr = newList.filter((type) => !alreadyChecked.includes(type))
    count += curr.length
}

console.log(count)