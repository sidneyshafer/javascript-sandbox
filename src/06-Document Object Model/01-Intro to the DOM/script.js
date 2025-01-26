// What is The Document Object Model?
/**
 * Programming interface for web/HTML elements
 * Structure that we can interact with via JavaScript
 * Includes tags, attributes, text nodes, etc
 * Represented as a tree structure
 */

console.log(window);
console.log(window.document);

console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);

console.log(document.links[0]);

// document.write('hello from JS');

const main = document.getElementById('main');
console.log(main);

main.innerHTML = '<h1>Hello from main!</h1>';

document.querySelector('#main h1').innerText = 'Hello';
