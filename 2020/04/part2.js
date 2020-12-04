const input = require('./input.js').split('\n\n').map((passport) => {
    const obj = {}
    passport.replace(/\n/g, " ").split(" ").forEach((field) => {
        const [key, value] = field.split(":")
        obj[key] = value
    })
    return obj
})

const required = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"]

const filteredPassports = input.filter((passport) => !required.filter((field) => !passport[field]).length)
const validPassports = filteredPassports.filter(({ ecl, pid, eyr, hcl, byr, iyr, hgt, cid }) => {
    if (!(byr && byr.length === 4 && +byr >= 1920 && +byr <= 2002)) return false
    if (!(iyr && iyr.length === 4 && +iyr >= 2010 && +iyr <= 2020)) return false
    if (!(eyr && eyr.length === 4 && +eyr >= 2020 && +eyr <= 2030)) return false
    if (!(hgt && ((hgt.includes("cm") && hgt.split("cm")[0] && +hgt.split("cm")[0] >= 150 && +hgt.split("cm")[0] <= 193) || (hgt.includes("in") && hgt.split("in")[0] && +hgt.split("in")[0] >= 59 && +hgt.split("in")[0] <= 76)))) return false
    if (!(hcl && hcl.length === 7 && hcl.match(/^#[0-9A-F]{6}$/i))) return false
    if (!(ecl && ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl))) return false
    if (!(pid && pid.match(/^[0-9]{9}$/))) return false
    return true
})

console.log(validPassports.length)