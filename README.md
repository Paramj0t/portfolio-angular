'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = [1, 2, 3];

// console.log(arr.slice(1)); // does not mutate the original array (does not change the original array)

// console.log(arr.slice(1, 3));

// console.log(arr.slice(-2));

// console.log(arr.slice(1, -2));

// console.log(arr.slice());

// console.log([...arr]);

// console.log(arr.splice(2));

// console.log(arr);

// console.log(arr.splice(-1));

// console.log(arr.reverse());

// console.log(arr);

// const letters = arr.concat(arr1);

// console.log(letters);
// console.log(arr);

// console.log([...arr, ...arr1]);

// console.log(arr1.join(''));

const arrr = [1, 2, 3];
console.log(arrr[0]);
console.log(arrr.at(0));
console.log(arrr.at(-1));

// for (let movement of movements) {
// for(let [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(1);
//   } else {
//     console.log(2);
//   }
// }

// movements.forEach(function(movement, index, array) {
//   //  if(index === 1) continue;  nhi krskte
//    if(movement > 0) {
//       console.log(movement, index, array);
//    } else {

//       console.log(2);
//    }
// })

// currencies.forEach(function(value, key, map) {
//   // console.log(value, key, map);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(function(value, key, map) {
// currenciesUnique.forEach(function(value, value, map) {
// currenciesUnique.forEach(function(value, _, map) {
//   console.log(value, map);
// });

// const eurToUsd = 1.1;

// const newArr = movements.map(function(movement, index, array) {
//   return movement * eurToUsd;
// })

// const newArrr = movements.map((movement) => {
//   return movement * eurToUsd;
// })

// console.log(movements, newArr, newArrr);

// const array = movements.filter(movement => {
//   return movement > 0;
// })

// console.log(array);

// const sum = movements.reduce((accumulator, cur, i, arr) => {
//   return accumulator + cur;
// }, 0)

// const max = movements.reduce((accumulator, cur, i, arr) => {
//   if(cur > accumulator) return cur;
//   else return accumulator;
// }, movements[0])

// console.log(max);

// const ans = movements.filter((c, i, arr) => c > 0).map((c, i, arr) => c * 10);

// console.log(ans);

// console.log(movements.find(mov => mov < 0));

// console.log(account.find(obj => obj.owner === 'Param'));

// console.log(account.findIndex(obj => obj.owner === 'Param'));

// console.log(movements.includes(-130));

// console.log(movements.some(mov => mov > 0));
// console.log(movements.some(mov => mov === 0));

// const fxn = mov => mov < 0;

// console.log(movements.every(mov => mov < 0));
// console.log(movements.every(fxn));

// const arrr = [[1, 2, [3, 4]], [4, 5, 6], 10];;

// console.log(arrr.flat(5));

// console.log(arrr.flatMap(cllbck));

// const owners = ['param', 'taran', 'hey'];

// console.log(owners.sort());

// console.log(owners);

// const x = [1, 2, 3, 4, -1, -2, -3];

// // console.log(x.sort());

// // return < 0 A, B
// // return > 0 B, A
// console.log(x.sort((a, b) => {
//   // return a > b ? 1 : -1; // number here does not matter 0 seh bada ya chota hona chaiye
//   return a - b;
// }) );

// console.log(x);

// console.log([1,2,3]);

// console.log(new Array(1, 2, 3));

// const y = new Array(1, 2);
// console.log(y);

// const x = new Array(7);
// console.log(x);
// x.fill(0);
// console.log(x);
// x.fill(1, 3, 5);
// console.log(x);

// const z = [1, 3, 4];
// z.fill(100, 2, 3);
// console.log(z);

// const y = Array.from({length: 7}, (cur, i) => i);
// const z = Array.from({length: 7}, (_, i) => i);
// console.log(y);
