let x;

// const todo = {};
const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.9234,
            lng: -71.3235
        },
    },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// use '...' to only get values/properties from objects
const obj3 = { ...obj1, ...obj2 };

// use Object.assign() to only assign values/properties from objects
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'Buy milk' },
    { id: 2, name: 'Clean kitchen' },
    { id: 3, name: 'Pay bills' },
];

x = todos[0].name;

// Take keys from object and put them into array
x = Object.keys(todo);

// Get length of object
x = Object.keys(todo).length;

// Get Array of object values
x = Object.values(todo);

// Get Array of key/value pairs
x = Object.entries(todo);

// Returns a boolean if an object has a specific property (key)
x = todo.hasOwnProperty('name');

console.log(x);