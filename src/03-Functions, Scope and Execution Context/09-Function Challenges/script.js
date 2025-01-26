// Challenge 1
const getCelcius = (f) => (f - 32) * 5/9;
console.log(`The temperature is ${getCelcius(32)} \xB0C`);

// Challenge 2
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min,
        max
    }
}

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function (length, width) {
    const area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`)
})(10, 5);