/** XMLHttpRequest Object
 * - A built-in browser object that allows us to make HTTP requests. We can make requests to servers without having to refresh the page. This allows us to make out webpages much more dynamic.
 * - These days, the fetch API is used over XHR.
 */

const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/sidneyshafer/repos');

/** readState has 5 possible values
 * 0: request not initialized
 * 1: server connection established
 * 2: request recieved
 * 3: processing request
 * 4: request finished and response is ready
 */

xhr.onreadystatechange = function () {
    // console.log(this.readyState);
    // console.log(this.status);
    if (this.readyState === 4 && this.status === 200) {
        // console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);
        data.forEach(repo => {
            const li = document.createElement('li');
            li.innerHTML = `${repo.created_at.toString().slice(0, 9)} | <strong>${repo.name}</strong>`;
            document.querySelector('#results').appendChild(li);
        });
    }
};

xhr.send();
