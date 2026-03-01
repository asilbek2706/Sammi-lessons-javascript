const person = {
    firstName: 'Asilbek',
    lastName: 'Karomatov',
    hobbies: {
        sport: 'Football',
        games: 'UFC',
    },
};

const clone = JSON.parse(JSON.stringify(person));

clone.hobbies.sport = 'Box';

console.log(clone);
console.log(person);

/*const objToJson = JSON.stringify(person);

const jsonToObj = JSON.parse(objToJson);

console.log(jsonToObj);*/

// #1. Har doim serverga ma'lumot JSON formatda yuborilishi shart.
// #2. Har doim server JSON formatda ma'lumot qaytaradi.
