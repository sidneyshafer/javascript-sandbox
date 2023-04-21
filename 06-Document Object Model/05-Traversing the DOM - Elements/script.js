let x;

// Get child elements

const parent = document.querySelector('.parent');

x = parent.children;

x = parent.children[1].innerText;
x = parent.children[1].className;
x = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent element from child
const child = document.querySelector('.child');

x = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling Elements
const secondItem = document.querySelector('.child:nth-child(2)');
x = secondItem;

x = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'blue';
secondItem.previousElementSibling.style.color = 'green';

console.log(x);