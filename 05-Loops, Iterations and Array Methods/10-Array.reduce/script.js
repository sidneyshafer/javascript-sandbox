const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum);

// 0 is the starting value
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

// Using a for loop
// const sum2 = () => {
//     let acc = 0;
//     for (const cur of numbers) {
//         acc =+ cur;
//     }
//     return acc;
// };

// console.log(sum2());

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
];

const total = cart.reduce(function (acc, product) {
    return acc + product.price;
}, 0);

console.log(total);
