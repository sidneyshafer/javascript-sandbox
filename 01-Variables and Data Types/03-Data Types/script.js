// *********************************** //
//PRIMITIVE DATA TYPES
// Stored directly in the "stack", where it is acessed from
/*
* String - sequence of characters. Must be in quotes or backticks.
* Number - integers as well as floating-point numbers
* Boolean - logical entity / true or false
* Null - intentional absence of any object value
* Undefined - a variable that has not been defined / assigned
* Symbol - built-in object whose constructor returns a unique symbol
* BigInt - numbers that are greater than the "Number" type can handle
*/

// REFERENCE TYPES (OBJECTS)
// Stored in the heap and accessed by reference
/*
* Reference types or "objects" are a non-primitive value and when assigned
to a vairable, the variable is given a reference to that value.
* Object literals, arrays, and functions are all reference types.
*/

// STATIC TYPING VS DYNAMIC TYPING
/* 
JavaScript is a dynamically-typed language. This means we do not explicitly
define the types for our variables. Many other languages are statically-
typed such as C, C++, and Java.

TypeScript is a superset of JavaScript, which allows static-typing. This
can make yuor code more verbose and less prone to errors.
*/
// *********************************** //

// String
const firstName = 'Sidney';

// Number
const age = 20;
const temp = 99.72;

// Boolean
const hasKids = false;

// Null
const aptNumber = null;

// Undefined
let score;
const score1 = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types
const numbers = [1,2,3,4];

const person = {
    myName: 'Lisa',
};

function sayHello() {
    console.log('Hello!');
}

const output = sayHello;
console.log(output, typeof output);