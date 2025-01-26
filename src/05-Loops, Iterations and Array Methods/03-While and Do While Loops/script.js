let i = 21;

// while (i <= 10) {
//     console.log('Number ' + i);
//     i++;
// }

// Use a for loop when you know the number of times you want a loop to run
// Use a while when the number of times a loop will run is unknown

// Loop over arrays
const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// Nesting while loops
// while (i <= 5) {
//     console.log('Number ' + i);

//     let j = 1;
//     while (j <= 5) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++;
//     }

//     i++;
// }

// Do while loops - will run at least once, even if condition is false

do {
    console.log('Number ' + i);
    i++;
} while (i <= 10);