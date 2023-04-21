const myString = 'developer';

let newString;

// Solution 1:
// newString = myString.replace('d', 'D');

// Solution 2:
newString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 3:
newString = myString[0].toUpperCase() + myString.substring(1);

// Solution 4:
newString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(newString);