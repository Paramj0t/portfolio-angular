'use strict';

// function calAge() {
// 	const age = 2;
// 	console.log(firstName);
// 	// console.log(lastName);

// 	function printAge() {
// 		// const firstName = 'paramjot';
// 		firstName = 'paramjot';
// 		console.log(age, firstName);
// 		if(age < 19) {
// 			console.log(age, firstName);
// 			var x = 5;
// 		}

// 		console.log(x);

// 		function add(a, b) {
// 			return a + b;
// 		}

// 		add(2, 3);
// 	}

// 	// add(1, 3); error
// 	printAge();
// 	return age;
// }

// // const firstName = 'param';
// let firstName = 'param';
// calAge();

// console.log(a);
// console.log(b);
// console.log(c);

// var a = 'p';
// let b = 'a';
// const c = 'r';

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
// 	return a + b;
// }

// const addExpr = function(a, b) {
// 	return a + b;
// }

// const addArrow = (a, b) => a + b;

// if(!num) fxn();

// var num = 2;

// function fxn() { 
// 	console.log("object");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(window.x === x);
// console.log(window.y === y);
// console.log(window.z === z);

// console.log(this);

// const calcAge = function(birthYear) {
// 	console.log(this);
// }

// calcAge(2022);

// const calcAge1 = (birthYear) => {
// 	console.log(this);
// }

// calcAge1(2022);

// const obj = {
// 	name: 'param',
//         age: 2,
// 	fxn: function() {
// 		console.log(this);
// 	}
// }

// const obj2 = {
// 	name: 'paramjot'
// }

// obj2.fxn = obj.fxn;

// obj2.fxn();

// const val = obj.fxn;

// console.log(val);

// val();

// var name = 'paramjot';

// const obj = {
// 	name: 'param',
//         age: 2,
//         fxn: function() {
//                 console.log(this.name);
// 		const self = this; // old sol
// 		const age = function() {
// 			console.log(self);
// 		}

// 		const age1 = () => {
// 			console.log(this);
// 		}

// 		// age(); 
// 		age1();
//         },
// 	fxn1: () => {
// 		console.log(this.name)
// 	}
// }

// obj.fxn();
// obj.fxn1();

// function addExpr(a, b) {
// 	console.log(arguments);
// 	return a + b;
// }

// addExpr(1, 2, 3, 4);

// let age = 30;
// let oage = age;
// age = 31;

// console.log(age);
// console.log(oage);

const me = {
	name: 'param',
	age: 20,
	family: [1, 2]
}

const friend = Object.assign({}, me);

me.family.push(3);
console.log(friend);
console.log(me);
