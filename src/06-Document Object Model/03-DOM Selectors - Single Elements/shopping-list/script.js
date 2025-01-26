// document.getElementById()
let output;
output = document.getElementById('app-title');
output = document.getElementById('app-title').id;
output = document.getElementById('app-title').getAttribute('id');

console.log(output);

// Set attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

console.log(title);

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'white';
title.style.backgroundColor = 'salmon';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector() - selects single elements

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Grape Juice';
secondItem.style.color = 'green';

// Use methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'red';


