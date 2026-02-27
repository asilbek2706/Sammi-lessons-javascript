// Context this

/*function showThis() {
    console.log(this);
}

showThis();*/

/*const person = {
    firstName: 'Asilbek',
    lastname: 'Karomatov',
    greeting: function () {
        const showThis = () => {
            console.log(this);
        };
        showThis();
        console.log(this);
    },
};

person.greeting();*/

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isHuman = true;
    this.greeting = function () {
        console.log(this);
    };
}

// #1.Oddiy funtionsdagi context thiswindow obyektga teng, 'use strict' da esa undefined bo'ladi.
// #2. Context obyektlardagi method - obyektga teng
//     Arrow functiondagi context this - uning yuqorisidagi contextga osilib oladi.
