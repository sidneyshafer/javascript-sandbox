const newMap = new Map();

newMap.set('name', 'Sidney');
newMap.set('age', 19);
newMap.set(1, 'blue');

console.log(newMap.get('name'));
console.log(newMap.get('age'));
console.log(newMap.get(1));

console.log(newMap.size);

console.log(newMap.has(1));
console.log(newMap.has(3));

newMap.delete(1);

console.log(newMap);

const peopleMap = new Map();
peopleMap.set('sidney', { phone: '555-555-5555', email: 'sid@gmail.com' });
peopleMap.set('jack', { phone: '555-555-5555', email: 'jack@gmail.com' });
peopleMap.set('allie', { phone: '555-555-5555', email: 'allie@gmail.com' });

peopleMap.forEach((person) => console.log(person.email));

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);