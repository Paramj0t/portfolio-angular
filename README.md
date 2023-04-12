Section 8

... default params

const fxn = function (a = 1, b = a * 2, c) { // es6 isi order mai js variables bnata phele a then b
	//es5
	// a = a || 1;
	// b = b || 2;
	

	const obj = {
		a,
		b,
	}

}

fxn('10'); // aise kr skta ismeh error nhi aiga ismeh b undefined hojaiga kyuki tune kuch bheja nhi and phir vo default value h toh vo lelega
// fxn(2, ,10); // dekh aise skip nhi kr skta error aiga, question is ki tu chahta default value lele beech wala but tu skip bhi nhi kr stka and agr tune 10 bhejdiya toh vo teri value lelega default ki jagah toh aise kya kare, jab koi value define nhi h toh undefined ata toh tu ek kaam kr undefined bhejde agr undefined bhejega toh vo default value lelega
fxn(2, undefined, 10);

agr fxn ko call nhi kiya h toh jo value store karega vo pura fxn hi karega


... primitive vs

fxn(primitive) mai reference nhi jati it creates a copy // passing by value

fxn(obj) mai reference jati hai WRONG reference idhr value hi h toh value jati h naki reference, basically we pass the reference to the fxn but do not pass by reference

JS does not have passing by reference for both primitive and objects


...first class


// used as a callback fxn
const convertString = function(x) {
	return x + ' ';
} 


// Higher order fxn
const fxn = function(cS) { // cS is a callback fxn
	console.log(cS(2));
	console.log(2);
	console.log(cS.name);
}

fxn(convertString); // we only pass the value, we do not call the fxn and convertString is called callback fxn and fxn is called higher order fxn

['param', 'jot'].forEach(print); // print bhi callback fxn h

Js uses callbacks all the time becoz to abstract the code improves code and DRY

Higher order fxn ko higher order isliye bola jata kyu ki vo higher level of abstraction peh work krte jismeh vo lower level of abstraction use krte

const x = function() {
	y();
}

const y = function() {
	console.log('1');
}

x();

// dono mai difference h 

const x = function() {
	y();
}

x();

const y = function() {
	console.log('1');
}


... fxn returning fxn

const hey = function() {
	return function() {
		console.log('hey');
	}
}

const x = hey();
x();

hey()(); // same baat aise kr skte 


... call and apply


As we know fxn is a object and object has methods so fxn also have objects

const obj = {
	a: 1,
	fxn() {
		console.log(this);
	}
}

const x = obj.fxn;

x(); // isse undefined print hoga coz this keyword depends ki usse call kaise kiya ja rha h

x.call(obj, bache hui arguments fxn ) // isse tum btado ki this kis object ko ponit kare phela argument and uske baad bache hui fxn ke arguments

apply is same as call bs apply(obj, [array of data === arguments]) and call(obj, data === arguments)

Apply is not used in modern js isse acha apply(obj, []) yeh array ko spread krdega automatically isse acha call use krlo ...arr krdo call(obj, ...arr)


...bind method

It is same as call but diff is that it does not immeditaly call the fxn instead it return a new fxn where the this keyword is bound

const y = x.bind(obj); // us fxn ki value hi dedega bound krke jisse this chl jai

y();

const z = x.bind(obj, 1, 2); // ismeh bhi arguments sth pass kr skte

z(); // toh idhr arguments pass krne ki need nhi h or ab nhi krskta change

Partial application  means that we can preset params

const fxn = (a, b) => a + b;

console.log(fxn(2, 3)); // normal call
console.log(fxn.bind(null, 1, 1)()); // bind krdiya but obj h nhi toh null dedo and preset krdiya 1, 1 and last mai jo () likha h vo isliye coz bind toh value dega mtlb pura fxn dega toh usse call kro
console.log(fxn.bind(null, 1, 1)(2, 2)); // 2, 2 jo likha h idhr vo glt h 1, 1 jab preset kr chuka h toh arguments 2, 2 nhi kr skta

const fxn1 = fxn.bind(null, 1); // dekh ek argument bhi preset kr skta and dusra khud seh bhej skta

console.log(fxn1(2));



... immediate invoked

function() {} it is statement isko expression bnao ki (fucntion() {}) and call krdo () lgake // IIFE bolte immediatly invoked functional expression

(function() {
	const isPrivate = 2; // this data is encapsulated isnide the fxn scope mtlb data privacy rakhi h
	console.log('hey');
})();

(() => {console.log('object');})();

() wrap seh statement seh expression
[] wrap seh variable wala

IIFE is not used in modern js as data encapsulation coz ab hum data encapsulation {} aise block seh bhi bna skte but it is used for immediate invoking fxn


... closures

We can closures makes a fxn remm all the variables that existed at the fxn birth place

closure has priority over scope chain

console.dir(booker); // isse closures dekh skte ho

let f;

const g = function() {
	const a = 23;
	f = function() {
		console.log(a * 2);
	}
}

const h = function() {
	const b = 777;
	f = function() { // idhr f reborn hua 
                console.log(b * 2);
        }
}

g();
h();
f();

console.dir(f);  // jab reborn hua toh new jagah ka closure hoga purana del hojaiga

closure arguments bhi leti h

closures ki bhi scope chain ki priority hoti h



