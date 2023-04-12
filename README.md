'use strict';

// const arr = []

// const fxn = function (a = 1, b = a * 2) { 
// 	//es5
// 	// a = a || 1;
// 	// b = b || 2;
	

// 	const obj = {
// 		a,
// 		b,
// 	}

// 	console.log(obj);
// 	arr.push(obj);
// }

// fxn('10');
// // fxn(2, ,10);
// fxn(2, undefined);

// console.log(arr);

// const x = '2';

// const param = {
// 	a: 1,
//         b: 2, 
// }

// const checkIn = function(x, param) {
// 	param.a = 4;
// 	x = 100;
// 	if(param.b === 2) {
// 		alert('checked in');
// 	} else {
// 		alert('not checked in');
// 	}
// }

// checkIn(x, param);

// console.log(x);
// console.log(param);

// const convertString = function(x) {
// 	return x + ' ';
// } 

// const fxn = function(cS) {
// 	console.log(cS(2));
// 	console.log(2);
// 	console.log(cS.name);
// }

// fxn(convertString);

// const print = function() { 
// 	console.log('hey');
// }

// ['param', 'jot'].forEach(print);

// const x = function() {
// 	y();
// }

// const y = function() {
// 	console.log('1');
// }

// x();

// const hey = function() {
// 	return function() {
// 		console.log('hey');
// 	}
// }

// const hey1 = () => {
// 	return () => {
// 		console.log('hey');
// 	}
// }

// const x = hey();

// console.log(x);

// // x();

// // hey()();

// hey1()()

// const obj = {
// 	a: 1,
// 	fxn() {
// 		console.log(this);
// 	}
// }

// const x = obj.fxn;

// // x();
// x.call(obj);

// // x.apply(obj);

// const y = x.bind(obj);
// const z = x.bind(obj, 1, 2);

// y(1, 2);
// z();

// Partial application

// const fxn = (a, b) => a + b;

// console.log(fxn(2, 3));
// console.log(fxn.bind(null, 1, 1)());
// console.log(fxn.bind(null, 1, 1)(2, 2));

// const fxn1 = fxn.bind(null, 1);

// console.log(fxn1(2));

// (function() {
// 	const isPrivate = 2;
// 	console.log('hey', isPrivate);
// })();

// (() => {console.log('object');})();

// const fxn = function() {
// 	let x = 0;
// 	return function() {
// 		x++;
// 		console.log(x);
// 	}
// }

// const booker = fxn();

// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function() {
// 	const a = 23;
// 	f = function() {
// 		console.log(a * 2);
// 	}
// }

// const h = function() {
// 	const b = 777;
// 	f = function() {
//                 console.log(b * 2);
//         }
// }

// g();
// h();
// f();

// console.dir(f);
