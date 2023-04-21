// Ways to declare a variable
// var, let, const

let firstName = 'Sidney';
let lastName = 'Shafer';

console.log(firstName, lastName)

let age = 30;
console.log(age);

// Naming Conventions
// -- Only letters, numbers, underscores, and dollar signs
// -- Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
    score += 1;
}
console.log(score);

const x = 100;
// x = 200; -- const cannot be directly re-assigned
// const score1; -- cannot declare const without initializing it

const array = [1,2,3,4];
array.push(5);
console.log(array);

const person = {
    firstName: 'Sidney',
    lastName: 'Shafer',
    age: 19
};

person.firstName = 'Allie';
person.email = 'allie@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;
const d = 10, e = 20, f = 30;