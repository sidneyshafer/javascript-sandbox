// DOM Node Types
/**
 * Element, Attribute, Text, CDATASection (text that will not be parsed by a parser)
 * EntityReference, Entitym ProcessingInstruction, Comment
 * Document, DocumentType, DocumentFragment, Notation
 */

let x;

const parent = document.querySelector('.parent');

x = parent.childNodes;
x = parent.childNodes[0].textContent;
x = parent.childNodes[0].nodeName;
x = parent.childNodes[3].nodeName;
x = parent.childNodes[3].textContent;
x = parent.childNodes[3].outerHTML;

x = parent.childNodes[3].innerText = 'Child One';
parent.childNodes[5].style.color = 'red';

x = parent.firstChild;

parent.lastChild.textContent = 'Hello Child';

// Parent nodes from child
const child = document.querySelector('.child');

x = child.parentNode;
x = child.parentElement;

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
x = secondItem;

x = secondItem.nextSibling;
x = secondItem.previousSibling;


console.log(x);

