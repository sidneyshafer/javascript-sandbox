// Default Params
function registerUser(user='bot') {
    return user + ' is registered';
}

console.log(registerUser('Sidney'));
console.log(registerUser());

// Rest Params
function sum(...numbers) {
    let total = 0;
    for(const num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4));

// Object as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

const user = {
    id: 1,
    name: 'Sidney',
}

console.log(loginUser(user));
console.log(loginUser({
        id: 2,
        name: 'Allie',
}));

// Arrays as params
function getRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];

    console.log(item);
}

getRandom([1,4,6,8,9,10,3,2]);