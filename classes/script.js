class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Full name: ${this.firstName} ${this.lastName}`;
    }
}

class StatusPerson extends Person {
    constructor(firstName, lastName, isMarried) {
        super(firstName, lastName);
        this.isMarried = isMarried;
    }

    get() {
        return `Full name: ${this.firstName} ${this.lastName}. Married: ${this.isMarried}`;
    }
}

const firstPerson = new Person('John', 'Ball');
const secondPerson = new Person('Yusuf', 'aka');
console.log(firstPerson.greeting());
console.log(secondPerson.greeting());

const thirdPerson = new StatusPerson('Asilbek', 'Karomatov', true)
console.log(thirdPerson.get());

const logger = (a, b, ...c) => {
    console.log(a);
    console.log(b);
    console.log();
}

logger(3, 4, 5, 6, 7, 8, 8, 6)

const calc = (a, b) => {
    b = b || 2
    a =a || 1
    return a + b
}
console.log(`Default: ${calc()}`);