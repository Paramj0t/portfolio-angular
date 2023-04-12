'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(i, j) {
    return [this.starterMenu[i], this.starterMenu[j]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  fxn: function({a : c = 5, b}) {
    return c + b;
  }
};

// const arr = [2, 3, 4];
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);

// // const [first, , second] = restaurant.categories;
// let [first, , second] = restaurant.categories;

// console.log(first, second);

// [second, first] = [first, second];

// const [g , h] = restaurant.order(1, 2);

// console.log(g, h);

// const nested = [1, 2, [3, 4]];

// const [i, , [m, n]] = nested;

// console.log(i, m, n);

// const [p, q, r] = [1, 2];
// const [p = 1, q, = 2 r = 3] = [1, 2];

// console.log(p, q, r);

// const arr = [1, 2, 3];
// console.log(arr[4]);

// const { name, openingHours, categories } = restaurant;
// const { name : resName, openingHours: hours, categories } = restaurant;
// const { name = 1 } = restaurant;

// const {name: newName = 'param', openingHours: hrs = {}} = restaurant;

// console.log(name, openingHours, categories);/

// let a = 2;
// let b = 3;

// const object = { a: 1, b: 2, c: 3 };

// ({a, b} = object);

// console.log(a, b);


// const {name, openingHours : {thu, fri}} = restaurant;

// console.log(thu, fri);

// restaurant.fxn({a: 1, b: 2});
// console.log(restaurant.fxn({b : 2}));

// const arr = [1, 2];

// const ar = [3, 4, arr[0], arr[1]];

// const a = [3, 4, ...arr];
// const abc = [...arr, 2, 3];

// const b = [3, 4, arr];

// console.log(a, ar, b);

// const shallowCopy = [...arr];

// const joinArr = [...shallowCopy, ...arr];

// const str = 'param';

// const letters = [...str, 'jot'];

// console.log(...str);

// // console.log(`${...str}`);

// console.log(letters);

// const input = [prompt('let\'s make something'), prompt('let\'s make something')];
// // const input = [prompt("let's make something")];

// console.log(...input);
// console.log(input[0], input[1]);

// const obj = {
//   a: 1,
//   b: 2
// }

// const arr = [1, 2]

// console.log({...obj});

// console.log(...arr);

// const arr = [1,2, ...[1, 2]];

// const [a, b, ...others] = [...[9, 8], 1, 2, 4, 5, ...[1, 2]]; 
// const [a, , b, ...others] = [...[9, 8], 1, 2, 4, 5, ...[1, 2]]; 

// console.log(a, b, others);

// const {sat, ...weekdays} = restaurant;

// console.log(weekdays);

// const add = function(...numbers) {
//   console.log(numbers);
//   console.log(...numbers);
// }

// add(1, 2, 3);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5);
// add(...[1, 2, 3], 4, 5, 6);

// console.log(3 || 'param');
// console.log(0 || 0 || 'param');
// console.log(0 || false || 0);
// console.log(0 || false || null);

// const x = 2;

// const y = x ? x : 3;

// const z = x || 3;

// console.log(y);
// console.log(z);

// console.log(1 && 2);
// console.log(1 && null && 2);

// if(x) {}

// x ? x : 3;
// x || 3;

// x ? 3 : x
// x && 3;

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion');

// const x = 9;

// const y = x ?? 10;

// console.log(y);


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// for(const item of menu) {
//   console.log(item);
// }

// for(const item of menu.entries()) {
//   console.log(...item);
// }

// for(const [i, j] of menu.entries()) {
//   console.log(i, j);
// }

// console.log([...menu.entries()]);

// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// const arr = ['key', 2, 3];

// const obj2 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   // obj1: obj1,
//   obj1,
//   // fxn: function() {
//     //   console.log('param');
//     // }
//     fxn(a, b) {
//       console.log(a, b);
//     },
//     [arr[0]]: 1,
// }
  
  
// console.log(obj2);

// console.log(restaurant.openingHours.mon.open);

// if(restaurant && restuaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// console.log(restaurant?.openingHours?.mon?.open);
// console.log(restaurant?.openingHours?.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days) {
//   // console.log(day);
//   restaurant.openingHours[day];
//   console.log(restaurant.openingHours[day]?.open || 'closed');
//   console.log(restaurant.openingHours[day]?.open ?? 'closed');
//   console.log(restaurant.openingHours.fri?.open);
// }

// console.log(restaurant?.openingHours?.(0, 1) ?? 'method does not exist');
// console.log(restaurant?.xyz?.(0, 1) ?? 'method does not exist');

// console.log(days[0]?.name ?? 'does not exist');

// for(const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// const properties = Object.keys(restaurant.openingHours); 
// const values = Object.values(restaurant.openingHours);
// console.log(properties);
// console.log(values);

// const kvarr = Object.entries(restaurant.openingHours);
// console.log(kvarr);

// for(const x of kvarr) {
//   console.log(x);
// }

// for(const [key, {open, close}] of kvarr) {
//   // console.log(key, value);
//   console.log(key, open, close);
// }

// const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta', 'pizza']);

// console.log(ordersSet);

// console.log(new Set('param'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('pasta'));

// ordersSet.add('param');
// ordersSet.delete('pasta');
// // ordersSet.clear();
// console.log(ordersSet);

// for(const order of ordersSet) {
//   console.log(order);
// }

// const arr = [...ordersSet];

// console.log(arr);


// const rest = new Map();

// rest.set('a', 1);
// rest.set(2, 1);
// rest.set([1, 2], 1);
// rest.set([1, 2], 1);
// rest.set(true, 1);
// rest.set([1, 2], 'param').set('a', 1);

// console.log(rest);
// console.log(rest.set({a: 1}, 1));

// console.log(rest.get(true));
// console.log(rest.get(2 > 1));

// console.log(rest.has('param'));
// rest.delete(true);

// console.log(rest.get([1,2]));
// // console.log(rest.get(arr));
// console.log(rest.size);
// rest.clear();

// const question = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
//   [true, 4],
//   [false, {a: 1, b: 2}]
// ])

// console.log(question);

// const newMap = new Map(Object.entries(openingHours));

// for(const m of question) {
//   console.log(...m);
// }

// console.log([...question]);

// console.log(question.entries());
// console.log([...question.entries()]);
// console.log(question.keys());
// console.log(question.values());

// const str = 'paramjot singh';

// console.log(str[0]);
// console.log(str[10]);
// console.log('paramjot'[2]);
// console.log('paramjot'.length);

// console.log(str.indexOf('a'));
// console.log(str.lastIndexOf('a'));
// console.log(str.lastIndexOf('singh'));
// console.log(str.lastIndexOf('s'));

// console.log(str.slice(4, 7));
// console.log(str.slice(0, str.indexOf(' ')));

// console.log(str.slice(-2));
// console.log(str.slice(2, -2));

// console.log(typeof new String('paramjot'));
// console.log(typeof new String('paramjot').slice(-1));

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());

// const a = 'Param';
// const b = 'param';


// const lowerA = a.toLowerCase();
// const trimA = lowerA.trim();

// const newA = a.toLowerCase().trim();

// const lowerB = b.toLowerCase();
// const trimB = lowerB.trim();

// const newB = b.toLowerCase().trim();

// console.log(lowerA);
// console.log(lowerB);

// console.log(newA);
// console.log(newB);

// console.log(newA === newB);

// const x = a.replace('P', 'p').replaceAll('a', 'A');
// const y = a.replace('Par', 'p').replace('a', 'A');
// console.log(x, y);

// console.log(a.includes('a'));

// console.log(a.startsWith('P'));
// console.log(a.endsWith('P'));

// const str = 'paramjot singh headfjjlklsdf';

// console.log(str.split('j'));

// const [firstName, lastName] = str.split(' ');

// console.log(firstName, lastName);

// const string = ['Mr', 'param', firstName, lastName].join(' ');

// console.log(string);

// const str = 'param';

// console.log(str.padStart(20, '+').padEnd(30, '+'));

// const mask = function(num) {
//   const str = num + ''; // tostring new string bhi kr skte the but pro khelo + '' string mai convert hojata

//   const newStr = str.slice(-4).padStart(str.length - 4, '*');

//   console.log(newStr);

// }

// mask(2487329480928349024);
// mask('2487329480928349024');

// const str = 'error... wait ';

// console.log(str.repeat(4));
