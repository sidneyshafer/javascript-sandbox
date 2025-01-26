const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 100 + 1);

const sum = x + y;
const difference = x - y;
const product = x * y;
const quotient = x / y;
const remainder = x % y;

const output = `${x} + ${y} = ${sum}\n${x} - ${y} = ${difference}\n${x} * ${y} = ${product}\n${x} / ${y} = ${difference}\n${x} % ${y} = ${remainder}`;

console.log(output);