// Array Basics
// Arrays are a special type of 'object' and a data structure in JavaScript that store multiple values

let x;

// Array Literal
const numbers = [12, 45, 33, 25, 52];
const mixed = [12, 'hello', true, null];

// Array Constructor
const fruits = new Array('Apple', 'Grape', 'Orange');

x = numbers[0];
x = numbers[0] + numbers[1];

x = `My favorite fruit is an ${fruits[2]}`;

// length of array will always be one more than the last item - index starts at 0, length starts at 1
x = numbers.length;

fruits[2] = 'pear';
x = fruits;

fruits[3] = 'banana';
fruits[fruits.length] = 'blueberry';

//console.log(numbers);
//console.log(fruits);
console.log(x);
