fetch('http://httpstat.us/200')
.then((res) => {
  return res;
})
.then(() => {
  console.log('success');
});


// Test with response.ok
fetch('http://httpstat.us/404')
.then((res) => {
  // console.log(res.status)
  if (!res.ok) {
    throw new Error('Request Failed');
  }
  return res;
})
.then(() => {
  console.log('success');
})
.catch((error) => {
  console.log(error);
});


// Check for specific code
fetch('http://httpstat.us/500')
.then((res) => {
  if (res.status === 404) {
    throw new Error('Not Found');
  } else if (res.status === 500) {
    throw new Error('Server Error');
  } else if (res.status !== 200) {
    throw new Error('Request Failed');
  }
  return res;
})
.then(() => {
  console.log('success');
})
.catch((error) => {
  console.log(error);
});


// catch runs on a network error - not a status code error
// fetch('http://hello123.net')
// .then((res) => {
//   return res;
// })
// .then(() => {
//   console.log('success');
// })
// .catch((error) => {
//   console.log(error);
// });