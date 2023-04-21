const clearBtn = document.querySelector('#clear');

// JavaScript Event Listener

// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

function onClear() {
  // alert('Clear Items');
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');
  // itemList.innerHTML = '';
  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// addEventListener() - can add multiple event listeners to the same event
// clearBtn.addEventListener('click', () => alert('Clear Items'));


clearBtn.addEventListener('click', onClear);
clearBtn.addEventListener('click', () => console.log('Clear Items'));

// setTimeout(() => clearBtn.removeEventListener('click', onClear) ,5000);

// setTimeout(() => clearBtn.click(), 5000);

