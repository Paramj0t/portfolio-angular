'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);

// console.log(0.1 + 0.2);

// console.log(0.1 + 0.2 === 0.3);

// console.log(Number('20'));

// console.log(+'20');

// console.log(Number.parseInt('20px'));

// console.log(Number.parseInt('20px', 10));

// console.log(Number.parseInt('20rem', 2));

// console.log(parseInt('20em', 2));

// console.log(Number.parseFloat('20.23abc   ')); // more encouraged to use this in modern javascript

// console.log(parseFloat('20.23abc   '));

// console.log(Number.isNaN('anb'));

// console.log(Number.isNaN(20));

// console.log(Number.isNaN(+'abc'));

// console.log(Number.isNaN(23 / 0));

// console.log(Number.isFinite(2));

// console.log(Number.isInteger(23));

// console.log(Math.sqrt(24));

// console.log(25 ** (1 / 2));

// console.log(25 **(1 / 3));

// console.log(Math.max(3, 4, 5, 6, 1, '23'));

// console.log(Math.max(2, 3, 4, 'abc2'));

// console.log(Math.min(2, 34, 5));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// console.log((Math.trucc(Math.random() * (max - min)) + 1) + min);

// console.log(Math.trunc(2.3));

// console.log(Math.round(23.4));

// console.log(Math.round(23.6));

// console.log(Math.ceil(23.3));

// console.log(Math.floor(23.2));

// console.log((2.7).toFixed(0));

// console.log((2.37).toFixed(2));

// console.log(5 % 2);

// console.log(5 / 2);

// console.log(4 % 2 == 0);

// function isEven(x) {
//   if(x % 2 == 0) console.log('isEven');
// }

// const isEvenSirWay = x => x % 2 == 0 ? 'isEven' : 'isOdd';

const x = 287_349_222;

// const y = 287._3;

const z = Number('349_34');

console.log(x);

// console.log(2 ** 53 - 1);

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(2 ** 53 + 105);

// console.log(982403983209849283490293840923849023849);

// console.log(203948230948203984092384092380480283408n);

// console.log(BigInt(230948092384092830940234234234));

// console.log(1000n + 1000n);

// console.log(10 + 1000n);

// console.log(10n > 10);

// console.log(11n > 10);

// console.log(10n === 10);

// console.log(typeof BigInt);

// console.log(10n == 10);

// console.log(Math.sqrt(16n));

// console.log(10n / 3n);

// console.log(new Date());

// console.log(new Date('Aug 02 2021 18:05:41'));

// console.log(new Date('oct 6 2023')); // yeh khud seh diya h js wali string use krlo upr jaise ki better coz reliable h and apni dene mai yeh h ki code break bhi ho skta mtlb pht bhi skta

// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2022, 10, 19, 15, 23, 5));

// console.log(new Date(2022, 10, 31));

// console.log(new Date(0));

// console.log(new Date(3*24*60*60*1000));

// const now = new Date();

// console.log(now.getYear());

// console.log(now.getFullYear());

// console.log(now.getMonth());

// console.log(now.getDate());

// console.log(now.getDay());

// console.log(now.getMonth());

// console.log(now.getMinutes());

// console.log(now.getSeconds());

// console.log(now.toISOString());

// console.log(now.getTime()); // yeh timestamp dega in milisecond from 1jan 1970

// console.log(new Date(1681113054029));

// console.log(Date.now()); // it gives timestamp in milliseconds of now

// now.setFullYear(2040);

// console.log(now);

// const future = new Date(2037, 10, 19, 15, 23);
// const now = new Date();
// console.log(future);
// console.log(now);

// console.log(+future);

// console.log((+future - +now) / (1000 * 60 * 60 * 24));

// console.log(Math.abs(-10));

// console.log(new Intl.DateTimeFormat('en-IN').format(new Date()));

// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   // weekday: 'numeric',
//   weekday: 'long',
// }

// console.log(new Intl.DateTimeFormat('en-IN', options).format(new Date()));

// const locale = navigator.language || navigator.languageCode

// console.log(new Intl.DateTimeFormat(locale, options).format(new Date()));

// console.log(new Intl.NumberFormat('en-IN').format(3249234.34));

// console.log(new Intl.NumberFormat(navigator.language).format(3249234.34));

// const options = { // yeh docs mai dekhlo
//   style: 'currency', // 'units' 
//   currency: 'INR', // 'celsius', 'miles-per-hour.....
// }

// console.log(new Intl.NumberFormat(navigator.language, options).format(3249234.34));


// const arr = [2, 3];
// const timer = setTimeout((x, y) => console.log(x), 3000, ...arr); 
// setTimeout(() => console.log(2)); 

// if(arr.includes('2')) clearTimeout(timer);

// console.log('hey');

// setInterval(() => {
//   console.log(new Date());
// }, 1000);

