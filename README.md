section 13 (OOPS)

Programmatically object bnane kelia we use classes

abstraction and encapsulation mai jo hiding h diff h ki abstraction mai hide krdete details jo needed nhi and encapsulation mai private krte jisse access na kr pai

... const fxn

it is blueprint of house(actual obj)

const Person = function(name, age) { // first letter caps pascal case mai contrsutor fxn bolte inko and ismeh arrow fxn nhi chalenge coz khud ka this keyword chaiye
	console.log(this); // this abhi empty h coz kuch set nhi apne prototype sath h bs and empty object h and last mai this hi return hota toh isliye this mai set krdi property
	this.name = name; // new this.name bnaya usmeh name params set krdiya
	this.age = age;

	// you should never create a method inside constructor fxn kyuki agr obj create kiya toh hr ke satb calAge fxn ghumega
	this.calAge = function() { // bar bar copy banegi hr obj kelia isliye dont do this sirf prototype mai bnado neeche dekho
		console.log(2022);
	}
}

const obj = new Person('Param', 10); 

obj is instance of Person..

new keyword seh 4 steps hote

1) new {} (empty obj) is created jo ki this hi h
2) fxn is called, this = {}
3) {} linked to prototype
4) fxn automatically return {ab empty nhi h} yeh return karega object jo starting mai create hua tha yeh nhi ki abhi create krke bhej do return {} yeh nhi

console.log(name instanceof Person); // mtlb us fxn construotr ka new keyword seh bna 


...prototypes

Each and every fxn in js automatically have property called protoype and object created with them gets accessed to all the methods and proties that we define on contructor prototype perperty () brackects nhi coz property bola h

Person.prototype.calAge = function() { // Person ki prototype property peh calAge fxn bnadiya
	console.log(2022);
	idhr this chalega hr jagah access kr skte
}

console.log(Person.prototype); // protoype property h

param.calAge(); // but obj peh 

and this hr jagah accessible h 

prototype of hr object of person same rahega 

console.log(param1.__proto__); // isse prototype ajaiga, and yeh __proto__ property ai h prototype seh hi new keyword ka 3rd point

console.log(param.__proto__ === param1.__proto__); // true aiga, same baat h hr object ka same protoype afr construcotr fxn same toh

console.log(param.__proto__ === Person.prototype); // yeh true aiga but Person.prototype should be prototype of Person but no it is prototype of all obj that are created with contructor fxn 

console.log(Person.prototype.isPrototypeOf(param)); // true

console.log(Person.prototype.isPrototypeOf(Person)); // false person ka thori h 

Person.prototype.hey = 'hey'; // property bhi de skte jaise upr calAge diya vo bhi de skte

console.log(param.hey); // property h no calling

console.log(param.hasOwnProperty('hey')); // mtlb ki protoytpe seh ai h ya khud obj this. krke bnai h, false aiga prototype mai bnai h

console.log(param.hasOwnProperty('name')); // true aiga obj mai bnai h

agr object mai nhi milta toh prototype mai dekhegi and this is called prototype inheritance

Person.protoype is also object and all object in js has prototype and Protoype of Person.prototype is Object.prototype(its is at top and its prototype is null) and this is called Protoytpe chain.

it is similar to scope chain instead of working with scope it works with property

iska benifit h ki hr jagah nhi krna padega define fxn ko obj sath carry nhi hoga prototype mai krdo, code reusability h coz ek hi baar bnana and protoype mai hi hoga

console.log(param.__proto__.__proto__); // yeh constructor fxn ka proto which is obj

console.log(param.__proto__.__proto__.__proto__); // object ka proto null

console.dir(Person.prototype.constructor); // it points back at Person mtlb contructor fxn peh hi

fxn bhi obj h uska bhi proto hota

array bhi obj h uska bhi proto hota

sab objects ka proto apne bnai hui ya phele seh jo bhi ho kyuki concept toh same hi h objects ke

console.log(arr.__proto__); // array bhi object h uska bhi prototype h

console.dir(arr.__proto__); // log seh sab properties chaiye to dir

console.dir(arr.__proto__ === Array.prototype); // true aiga toh 

console.dir(arr.__proto__.__proto__); // Object aiga

console.dir(arr.__proto__.__proto__.__proto__); // null aiga

console.dir(x => x + 1); // fxn is an object h uski properties dekhli dir seh toh agya prototype usmeh jo methods phele use kiye the na bind call yeh sab 


...es6 

classes are function only thats why we have class expression and class declaration(preffered by sir)

class expression
// const PersonCl = class {

// }

class PersonCl { // class declaration
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	calcAge() { // yeh prototype mai add hoga object peh nhi of PersonCl ka
		console.log(this.age);
	}
}

const paramjot = new PersonCl('param', 20);
console.log(paramjot);
paramjot.calcAge();

classes are not hoisted we cant use before declaring error aiga

classes are also first class citizen which means we can pass them into fxn and we can return it from fxn coz classes are special type of fxn behind the scene

clasess are executed in strict mode by default


...getters 

These are called accessors property and normal properties are called data properties


object peh getter and setter property not method

const account = {
	owner : 'param',

	get age() { // it si property not method
		console.log('object');
	},

	set name(name) {
		this.owner = name;
	}
};

account.age; // not age();

// account.set('paramjot'); // not this

account.set = 'paramjot';

classes peh 

get and set zaroori nhi sath use kar

class PersonCl { // class declaration
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	calcAge() { // yeh prototype mai add hoga object peh nhi of PersonCl ka
		console.log(this.age);
	}

	get ageOfPerson() {
		return this.age;
	}

	get age() {
		return this._age; // error htane kelia maximum size wala use _ convention
	}

	set ageOfPerson(value) {
		this.age = value;
	}

	set age(value) {
		this._age = value; // this.age hota toh dono(constructor and set dono same property change kr rhe toh error ajata) isliye this._age krlo underscore dallo convention
	}
};


console.log(paramjot.ageOfPerson);

paramjot.ageOfPerson = 'param';

agr get ka name same and contstructor jo property set kr rha usse toh dono ek hi property set kar rhe isse maximum call stack execced ka error ajaiga

jo property already exist h usko set krne kelia vapis seh use _ nhi toh maximum call stack execced error aiga


...static

Array.from, from is attached to Array constructor not to prototype so [1,2].from will not work but Array.from will work

Person.hey = function() { // static method bn gya contrusctor fxn peh add kiya h
	console.log('object');
	console.log(this); // this will point to contructor fxn coz that is exactly the obj calling the fxn, whenver obj is calling the method will be the this keyword inside that fxn
}

Person.hey(); // yeh chalega and yeh inherit nhi ho rha to prototype
param.hey(); // param is uska instance and Person ke prototype wale inherit hote but hey prototype mai aya hi nhi isliye param.hey() nhi chalega
Person.prototype.hey() is different coz vo prototype mai hui h add

class PersonCl { // class declaration
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// it is called instance method kyuki it will get added and all instance will have access to it
	calcAge() { // yeh prototype mai add hoga object peh nhi of PersonCl ka 
		console.log(this.age);
	}


	// yeh static method 
	static hey() {
		console.log(this);
	}
};


...object create

least used, 3rd way h 1st was const fxn 2nd was clasees 3rd yeh h

Object.create creates new object and prototype of object is what obj we pass as arguement

ismeh hum set krte prototype property manually to any obj that we want

const PersonProto = { // yeh bhi obj hi toh h syntax dekh dyan seh
	calcAge() {
		console.log(2022);
	}

	init(name, age) { // idhr krle
		this.name = name;
		this.age = age;
	}
};

here on paramjotsingh obj we set protoype property to PersonProto object
const paramjotsingh = Object.create(PersonProto); // obj create hogya PersonProto sath ismeh humne manually add kiya protoype
console.log(paramjotsingh); // obj

//bad way to manipulate or create obj koi programmatic way hona chaiye, good way is upr init krle
paramjotsingh.name = 'param';
paramjotsingh.age = 20;

paramjotsingh.calcAge(); // usspeh prototype property access krte hui


... inheritance with con fxn

Real classes do not exist in js but we say classes for ease

const Person = function(name, age) {
	// console.log(this);
	this.name = name;
	this.age = age;
}

Person.prototype.calcAge = function() {
	console.log(this, 2022);
}

const Student = function(name, age, course) {
	// console.log(this);
	// this.name = name;
	// this.age = age;
	// Person(name, age); // it will not work coz Person toh contructor bna rha but this nhi ho rha new nhi h isliye
	Person.call(this, name, age); // isliye use .call jisse this chale
	this.course = course;
}

Student.prototype = Object.create(Person.prototype); // Object.create return empty object which gets store in Student.prototype or yeh phele hi hona chiaye sabseh coz nhi toh yeh override krdega sabko jaise jo next method h

// Student.prototype = Person.prototype; // wrong way we dont want ki dono object same ho we want ki Person prototype object should be prototype of student.prototype, we want to inherit from it rather than specifing same object isko solve karega Object.create

Student.prototype.intro = function() {
	console.log(this.name);
}

const param = new Student('param', 23, 'CSE');
console.log(param);
param.intro();
console.log(param.__proto__);
console.log(param.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


... inheritance with classes

classes mai jo bhi con fxn seh kiya ab automatically ho jata

class PersonCl { 
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	calcAge() { 
		console.log(this.age);
	}	

	get age() {
		return this._age;
	}

	set age(value) {
		this._age = value;
	}

	static hey() {
		console.log(this);
	}
};

class StudentCl extends PersonCl {
	constructor(name, age, course) {
		// super always needs to happen first! coz jisse this keyword ki access miljai
		super(name, age);
		this.course = course;
	}

	intro() {
		console.log(this.name);
	}

	calcAge() { // isne override krdiya parent class ke calcAge ko ya bolo shadow krliya
		console.log(this.age, 2022);
	}
}

const param = new StudentCl('param', 20, 'CSE');
const param1 = new StudentCl('param', 20); // parent ka chl jaiga agr child mai constructor nhi hua toh and agr constructor h and sate arguments nhi pass karo toh child ka hi chalega but undefined hoga

console.log(param);

console.log(param1);

param1.intro();

param1.calcAge() // child wala chalega



... ineheritance obj create

ismeh constructor and prototype property seh kuch lena dena nhi bs object inherit another object 

const PersonProto = {
	calcAge() {
		console.log(2022);
	},

	init(name, age) { 
		this.name = name;
		this.age = age;
	}
};

const paramjotsingh = Object.create(PersonProto); 
const StudentProto = Object.create(PersonProto); // this create PersonProto as prototype of StudentProto
StudentProto.init = function (name, age, course) {
	PersonProto.init.call(this, name, age); // fxn peh init kr rha
	this.course = course;
}
const param = Object.create(StudentProto);
console.log(param); 


...classes

Yehi use hoti real world mai jyada

class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this._pin = pin;
		this._movements = []; // empty array h toh params na bnao
		this.locale = navigator.language; // yeh toh fixed hi never chaning toh direct yehi likhdo param na bnao

		console.log('Hey '); // yeh chl jaiga khud constructor chalega tab
	}

	// these methods are public interface of our objects and are called APIs
	deposit(val) {
		this._movements.push(val);
	}

	withdraw(val) {
		this.deposit(-val); // dusre methods ko call kr skta h
	}
}

const acc1 = new Account('param', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250); // aise direct property sath interact mt karo methods bnao and aise krne seh rokhne kelia we use encapsulation

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);


...encap

private kardo jisse bahar seh modify nhi kr sake and APIs hi accesseble ho sirf

js classes do not support data privacy and encapsulation so we fake it _ lagake it is not truely private and so we call them protected

class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this._pin = pin;
		//protected property access toh kr skte bahar seh but apni team mai we know we should not access it outside coz movement nhi _movement h
		this._movements = []; // empty array h toh params na bnao
		this.locale = navigator.language; // yeh toh fixed hi never chaning toh direct yehi likhdo param na bnao

		console.log('Hey '); // yeh chl jaiga khud
	}

	// these methods are public interface of our objects and are called APIs
	deposit(val) {
		this._movements.push(val);
	}

	withdraw(val) {
		this.deposit(-val); // dusre methods ko call kr skta h
	}
}

const acc1 = new Account('param', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250); // aise direct property sath interact mt karo methods bnao

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);


... truely private

Not supported abhi kuch kuch supported h kuch kuch nhi h

1) Public fields = property
2) Private fields
3) Public methods
4) Private methods
5 6 7 8) static version of all 1 2 3 4)


let x;
clg(x) is undefined revise krva rha

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

// console.log(acc1.#movements); // error ajaiga cant access coz private h

it is class field proposal abhi bhi chl rha isliye kabhi kabhi supported kabhi kabhi ni


...chainable methods in class

array mai jaise chaining hoti thi vo krni h toh 

	deposit(val) {
		this.#movements.push(val);
		return this; // yeh kardo
	}

acc1.deposit(200).deposit(250).withdraw(100); // chaining

jisse deposit ab this return kare mtlb vohi object and uspeh vapis deposit call krdiya smjhe


