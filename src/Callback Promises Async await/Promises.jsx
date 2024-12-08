function step1(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}

function step2(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}

function step3(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong");
    }
  });
}
step1(10, false)
  .then((result1) => step2(result1, false))
  .then((result2) => step3(result2, false))
  .then((result3) => console.log(result3))
  .catch((error) => console.log(error));

// const p1 = Promise.resolve('Like If you understood callbacks');
// const p2 = Promise.reject('Rejected');
// const p3 = 100;
// const p4 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, 'Subscribe for more updates');
// });

// Promise.all([ p1, p3, p4 ]).then((values) => console.log(values)); //either all resolved or any of to be rejected.
// Promise.race([ p3, p1, p3 ]).then((value) => console.log(value)); //which is first resolved or rejected.
// Promise.allSettled([ p1, p2, p3, p4 ]).then((values) => console.log(values)); //until all should be settled either reject or resolve.
// Promise.any([ p2, p3 ]).then((values) => console.log(values)); //any promise which resolves then it gives the result
// const axios = require('axios');

// fetch('https://api.github.com/users').then((response) => response.json()).then((result) => console.log(result));
