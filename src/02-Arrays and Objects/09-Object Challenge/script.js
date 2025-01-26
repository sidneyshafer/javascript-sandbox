
// Step 1
const library = [
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Animal Farm',
        author: 'George Orwell',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const str = JSON.stringify(library);
console.log(str);
