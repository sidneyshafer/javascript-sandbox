const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className
  // console.log(itemList.className);
  // text.className = 'card dark';

  // classList
  // console.log(itemList.classList);

  // itemList.classList.forEach((c) => console.log(c));

  // Add class 'dark' and keep 'card' class
  // text.classList.add('dark');

  // Remove card class
  // text.classList.remove('card');

  // text.classList.toggle('dark');
  // itemList.classList.toggle('hidden');

  // text.classList.replace('card', 'dark');

  // Change style
  // itemList.style.lineHeight = '2';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;

