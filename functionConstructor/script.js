function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hello = function() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

Person.prototype.convertAge = function(age) {
    console.log(`${this.firstName} age is: ${age}.`)
}

const firstPerson = new Person('Asilbek', 'Karomatov')
const secondPerson = new Person('Berlin', 'Absdsjf')

firstPerson.convertAge(20)
secondPerson.convertAge(25)

firstPerson.hello()
secondPerson.hello()

console.log(firstPerson)
console.log(secondPerson)

// const number = new Function('3');
// console.log(number);