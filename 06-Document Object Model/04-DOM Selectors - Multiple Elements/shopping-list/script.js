// querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

// listItems[1].style.color = 'red';

// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//     if (index === 0 ) {
//         item.innerHTML = `Chips
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }

//     if (index === 1) {
//         item.style.color = 'green';
//     }
// });


// getElementsByClassName()
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
    console.log(item.innerText);
});


// getElementsByTagName()
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);

