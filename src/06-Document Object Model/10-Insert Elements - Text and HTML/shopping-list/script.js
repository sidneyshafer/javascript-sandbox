// insertAdjacentElement Example
function insertElement() {
    const filter = document.querySelector('.filter');

    const h3 = document.createElement('h3');
    h3.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h3);
}

// insertAdjacentText Example
function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

// insertAdjacentHTML Example
function insertHTML() {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
}

// insertBefore Example
function insertBeforeItem() {
    const ul = document.querySelector('.items');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}


insertElement();
insertText();
insertHTML();
insertBeforeItem();

/*
 <!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
*/