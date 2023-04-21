let x;

const array = [34, 55, 95, 20, 15];

array.push(100); // add item to end of array
array.pop(); // remove item from end of array
array.unshift(99); // add item to beginning of array
array.shift(); // remove item from beginning of array

// array.reverse();

x = array.includes(20);
x = array.indexOf(15);

x = array.slice(1, 4);
// x = array.splice(1, 3); // splice() changes original array, slice() does not
// x = array.splice(3, 1);

x = array.splice(1, 4).reverse().toString().charAt(1);

//console.log(array);
console.log(x);