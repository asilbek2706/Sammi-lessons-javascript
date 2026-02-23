/*
const now = new Date();

now.setHours(25)

console.log(now)

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getUTCHours())

console.log(now.getTimezoneOffset())
console.log(now.getTime())
console.log(new Date(1771864569447))*/

let startDate = new Date();

for (let i = 0; i < 100000000; i++) {
    let number = i ** 3
}

let endDate = new Date();

console.log(`Loop was worked ${endDate - startDate} milliseconds`)