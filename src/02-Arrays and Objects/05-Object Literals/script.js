// Object Literal
// A common data structure that holds key/value pairs

let x;

const person = {
    name: 'Sidney Shafer',
    age: 19,
    isAdmin: true,
    address: {
        street: '123 Main St.',
        city: 'Chaska',
        state: 'MN',
    },
    hobbies: ['music', 'sports', 'cooking'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Allie Shafer';
x = person.name;
person.isAdmin = false;
x = person.isAdmin;

delete person.age;

person.hasChildren = false;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`)
}

person.greet();

console.log(x);
console.log(person);
