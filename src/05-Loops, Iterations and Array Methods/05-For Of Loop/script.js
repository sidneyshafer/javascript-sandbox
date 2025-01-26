
// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [
    {fname: 'Sidney'},
    {fname: 'Kate'},
    {fname: 'Steve'},
]

for (const item of items) {
    console.log(item);
}

for (const user of users) {
    console.log(user.fname);
}

// Loop over strings
const str = 'Hello World!';

for (const letter of str) {
    console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('fname', 'John');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}