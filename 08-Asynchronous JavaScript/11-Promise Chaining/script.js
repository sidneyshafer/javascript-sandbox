const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({fname: 'Sidney', age: 19});
    } else {
      reject('Error: something went wrong!');
    }

  }, 1000);
});

promise.then((user) => {
  console.log(user);
  return user.fname;
}).then((fname) => {
  console.log(fname);
  return fname.length;
}).then((nameLength) => {
  console.log(nameLength);
}).catch((error) => {
  console.log(error);
  return 123;
}).then((x) => {
  console.log('This will run no matter what', x);
});
