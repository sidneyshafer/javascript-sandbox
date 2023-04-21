// window.alert('Hello!');
// console.log(window.innerWidth);

const x = 100;
console.log(x, 'in global scope');

function run() {
    console.log(innerHeight);
    console.log(x, 'in function scope');
}

run();

if (true) {
    console.log(x, 'in block scope');
}

function add() {
    //function variable - can only be accessed within the function
    const y = 50;
    const x = 1; // overriding global 'x' variable
    console.log(x + y);
}

add();