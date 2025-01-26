// Values are stored on the stack
const myName = 'Sidney';
const age = 25;

// Reference values are stored on the heap
const person = {
    myName: 'Sidney',
    age: 25
}

let newName = myName;
newName = 'John';

let newPerson = person;
newPerson.myName = 'Adam';

console.log(myName, newName);
console.log(person, newPerson);