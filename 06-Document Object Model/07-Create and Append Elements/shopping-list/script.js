const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// innerText is more used for getting text from an already existing element
// div.innerText = 'Hello World';

// Should create a text Node element and append it to the new element
const text = document.createTextNode('Hello World');
div.appendChild(text);

// append div element
// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);

console.log(div);