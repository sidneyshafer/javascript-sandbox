// Variable Declaration
// Three main ways to declare variables: var, let, and const.
let firstName = 'Sidney';
let lastName = 'Shafer';
console.log(firstName, lastName); // Output: Sidney Shafer

// Re-assigning Variables
var temp = 'temp string';
temp = 'new string';

let age = 30;
age = 31;
// console.log(age);

let score;
score = 1;
console.log(score); // Output: 1

// Scope Behavior
if (true) {
    score += 1;
}
console.log(score); // Output: 2

// Differences between Let and Var
if (true) {
    let x = 10; // x is only accessible within this "if" block
    var y = 20; // y is accessible outside the "if" block as well
}
// console.log(x); // This will throw an error because "x" is not accessible here
console.log(y); // This will print 20

// Constants
const x = 100;
// x = 200; // Error: Cannot be directly re-assigned
// const score1; // Error: Cannot declare without initializing it

const array = [1, 2, 3, 4];
array.push(5);
console.log(array); // Outputs: [1, 2, 3, 4, 5]

const person = {
    firstName: 'Sidney',
    lastName: 'Shafer',
    age: 19
};

person.firstName = 'Jane';
person.lastName = 'Doe';
person.email = 'example@gmail.com';
console.log(person);

// Declaring Multiple Variables
let a, b, c; // Declares but does not initialize variables
const d = 10, e = 20, f = 30; // Declares and initializes constants

// Variable Naming Conventions
// -- Only letters, numbers, underscores, and dollar signs
// -- Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase