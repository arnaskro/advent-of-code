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

const recursion = (currKey) => {
    if (!rules[currKey]) return 1
    return Object.entries(rules[currKey]).reduce((total, [key, value]) => {
        const childValues = recursion(key)
        const x = value * childValues
        console.log(currKey, ">", key, `(${value}) - ${childValues}`)
        return total + x
    }, 1)
}

console.log(recursion('shiny gold') - 1)