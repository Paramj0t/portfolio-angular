'use strict';

// const Person = function(name, age) {
// 	console.log(this);
// 	this.name = name;
// 	this.age = age;

// 	// you should never create a method inside constructor fxn
// 	// this.calAge = function() {
// 	// 	console.log(2022);
// 	// }
// }

// const param = new Person('Param', 10);
// // const param1 = new Person('Param', 10);

// // console.log(param instanceof Person);

// // Person.prototype.calAge = function() {
// // 	console.log(2022);
// // }

// // console.log(Person.prototype);

// // param.calAge();

// // console.log(param1.__proto__);
// // console.log(param.__proto__ === param1.__proto__);
// // console.log(param.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(param));
// // console.log(Person.prototype.isPrototypeOf(Person));

// // Person.prototype.hey = 'hey';

// // console.log(param.hey);

// // console.log(param.hasOwnProperty('hey'));

// // console.log(param.hasOwnProperty('name'));

// // console.log(param.__proto__.__proto__);

// // console.log(param.__proto__.__proto__.__proto__);

// // console.dir(Person.prototype.constructor);

// // const arr = [2, 3, 4];

// // console.log(arr.__proto__);
// // console.dir(arr.__proto__);
// // console.dir(arr.__proto__ === Array.prototype);
// // console.dir(arr.__proto__.__proto__);
// // console.dir(arr.__proto__.__proto__.__proto__);

// // console.dir(x => x + 1);

// // const PersonCl = class {

// // }

// class PersonCl { // class declaration
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	calcAge() { // yeh prototype mai add hoga object peh nhi of PersonCl ka
// 		console.log(this.age);
// 	}

// 	// get ageOfPerson() {
// 	// 	return this.age;
// 	// }

// 	get age() {
// 		return this._age;
// 	}

// 	// set ageOfPerson(value) {
// 	// 	this.age = value;
// 	// }

// 	set age(value) {
// 		this._age = value;
// 	}

// 	static hey() {
// 		console.log(this);
// 	}
// };

// const paramjot = new PersonCl('param', 20);
// console.log(paramjot);
// paramjot.calcAge();

// console.log(paramjot.ageOfPerson);
// console.log(paramjot.age);

// paramjot.ageOfPerson = 'param';

// console.log(object);

// const account = {
// 	owner : 'param',

// 	get age() { // it si property not method
// 		console.log('object');
// 	},

// 	set name(name) {
// 		this.owner = name;
// 	}
// };

// account.age;

// // account.set('paramjot');

// account.set = 'paramjot';

// Person.hey = function() {
// 	console.log('object');
// 	console.log(this);
// }

// Person.hey();
// param.hey();

// const PersonProto = {
// 	calcAge() {
// 		console.log(2022);
// 	},

// 	init(name, age) { // idhr krle
// 		this.name = name;
// 		this.age = age;
// 	}
// };

// const paramjotsingh = Object.create(PersonProto); // obj create hogya PersonProto sath
// console.log(paramjotsingh); // obj

// //bad way to manipulate or create obj koi programmatic way hona chaiye, good way is upr init krle
// // paramjotsingh.name = 'param';
// // paramjotsingh.age = 20;

// paramjotsingh.init('param', 2);

// paramjotsingh.calcAge(); // usspeh prototype property access krte hui

// const Person = function(name, age) {
// 	// console.log(this);
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.calcAge = function() {
// 	console.log(this, 2022);
// }

// const Student = function(name, age, course) {
// 	// console.log(this);
// 	// this.name = name;
// 	// this.age = age;
// 	// Person(name, age); // it will not work coz Person toh contructor bna rha but this nhi ho rha new nhi h isliye
// 	Person.call(this, name, age); // isliye use .call jisse this chale
// 	this.course = course;
// }

// Student.prototype = Object.create(Person.prototype); // Object.create return empty object which gets store in Student.prototype or yeh phele hi hona chiaye sabseh coz nhi toh yeh override krdega sabko jaise jo next method h

// // Student.prototype = Person.prototype; // wrong way we dont want ki dono object same ho we want ki Person prototype object should be prototype of student.prototype, we want to inherit from it rather than specifing same object isko solve karega Object.create

// Student.prototype.intro = function() {
// 	console.log(this.name);
// }

// const param = new Student('param', 23, 'CSE');
// console.log(param);
// param.intro();
// console.log(param.__proto__);
// console.log(param.__proto__.__proto__);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// class PersonCl { 
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	calcAge() { 
// 		console.log(this.age);
// 	}	

// 	get age() {
// 		return this._age;
// 	}

// 	set age(value) {
// 		this._age = value;
// 	}

// 	static hey() {
// 		console.log(this);
// 	}
// };

// class StudentCl extends PersonCl {
// 	constructor(name, age, course) {
// 		// super always needs to happen first! coz jisse this keyword ki access miljai
// 		super(name, age);
// 		this.course = course;
// 	}

// 	intro() {
// 		console.log(this.name);
// 	}

// 	calcAge() { // isne override krdiya parent class ke calcAge ko ya bolo shadow krliya
// 		console.log(this.age, 2022);
// 	}
// }

// const param = new StudentCl('param', 20, 'CSE');
// const param1 = new StudentCl('param', 20); // parent ka chl jaiga agr child mai constructor nhi hua toh and agr constructor h and sate arguments nhi pass karo toh child ka hi chalega but undefined hoga

// console.log(param);

// console.log(param1);

// param1.intro();

// param1.calcAge();

// const PersonProto = {
// 	calcAge() {
// 		console.log(2022);
// 	},

// 	init(name, age) { 
// 		this.name = name;
// 		this.age = age;
// 	}
// };

// const paramjotsingh = Object.create(PersonProto); 
// const StudentProto = Object.create(PersonProto); // this create PersonProto as prototype of StudentProto
// StudentProto.init = function (name, age, course) {
// 	PersonProto.init.call(this, name, age); // fxn peh init kr rha
// 	this.course = course;
// }
// const param = Object.create(StudentProto);
// console.log(param); 


class Account {
	// public fields (they are on instances)
	locacle = navigator.language;
	
	//private fields
	#movements = []; 

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this._pin = pin;
		//protected property access toh kr skte bahar seh but apni team mai we know we should not access it outside coz movement nhi _movement h
		// this._movements = []; // empty array h toh params na bnao
		// this.locale = navigator.language; // yeh toh fixed hi never chaning toh direct yehi likhdo param na bnao

		console.log('Hey '); // yeh chl jaiga khud
	}

	// these methods are public interface of our objects and are called APIs
	deposit(val) {
		this.#movements.push(val);
		return this;
	}

	//they are on prototype and are public methods
	withdraw(val) {
		this.deposit(-val); // dusre methods ko call kr skta h
	}

	//protected methods fake private
	_deposit(val) {
		this.#movements.push(val);
	}

	//private methods
	#requestLoan(val) {
		clg('hey');
	}
}

const acc1 = new Account('param', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250); // aise direct property sath interact mt karo methods bnao

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);

// console.log(acc1.#movements);

acc1.deposit(200).deposit(250).withdraw(100); // chaining
