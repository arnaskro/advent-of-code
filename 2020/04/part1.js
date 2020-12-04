const input = require('./input.js').split('\n\n').map((passport) => {
    const obj = {}
    passport.replace(/\n/g, " ").split(" ").forEach((field) => {
        const [key, value] = field.split(":")
        obj[key] = value
    })
    return obj
})

const required = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"]

const validPassports = input.filter((passport) => !required.filter((field) => !passport[field]).length)

console.log(validPassports.length)
