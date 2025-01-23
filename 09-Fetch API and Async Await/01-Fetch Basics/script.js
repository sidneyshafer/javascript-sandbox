// Fetching a JSON file
fetch('./movies.json').then((response) => {
  // console.log(response);
  return response.json();
}).then((data) => {
  console.log(data);
});

// Fetching a text file
fetch('./test.txt').then((response) => response.text()).then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/sidneyshafer').then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
  document.querySelector('h1').textContent = data.login;
});
