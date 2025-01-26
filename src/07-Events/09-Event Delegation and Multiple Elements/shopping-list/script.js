const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');
const listIcons = document.querySelectorAll('li button');

// listItems.forEach(item => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

// list.addEventListener('click', (e) => {
//   if (e.target.tagName === 'LI') {
//     e.target.remove();
//   }
// });

listIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
  });
});

list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});

list.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = '#333';
  }
});
