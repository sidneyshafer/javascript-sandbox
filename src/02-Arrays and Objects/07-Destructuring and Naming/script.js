const firstName = 'Sidney';
const lastName = 'Shafer';
const age = 19;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        username: 'Sidney',
    },
};

// Destructure Objects
const { id: todoId, title, user: { username }, } = todo;

console.log(todoId);
console.log(username);

// Destructure Arrays
const numbers = [23, 67, 33, 49];

// The rest operator (...) -> same as spread operator
const [ first, second, ...rest ] = numbers;

console.log(first, second, rest);