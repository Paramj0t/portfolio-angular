Section skipped Adv dom only topic name jaan liye and mapty project skip bkr tha resume mai nhi dalna toh kya use 


section 15 (Async)

...asyc js

most of code jo ab tk likha sync tha

AJAX is not used as XML data format is old now JSON is used which is basically js object converted to strings

github peh bht saari public apis h

CORS, API endpoint 

//OLD WAY
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal');
request.send();
console.log(request.responseText); // it will happen in background abhi kuch nhi show hoga coz abhi toh get kr hi rha h backend seh

...Callback Url

callback( callback( callback( .... ke ander ke ander toh callback hell hojati

setTimeout(() => {
	console.log(1);
	setTimeout(() => {
		console.log(2);
		setTimeout(() => {
			console.log(3); // > triangular shape bn jati callback hell h yeh
		}, 1000)
	}, 1000);
}, 1000)

code which is hard to understand is basically bad code will have more bugs


...Promises

ES6 feature

Promise are only settled once from then the state will remain unchange foreever promise ki state jo agai rejected ya success (settled mai) vo change nhi hoti ek baar agai toh agai.

... consume

promise seh object ata h promise ka ki success ya rejected usko .then() seh krlo ki settled hojai toh .then karo 

json method is available for all response objects that is coming from the fetch fxn

json bhi async fxn h which means it will return promise 

Async fxn return promises

.then seh handle promise

const getCountryData = function (country) {
	fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
		console.log(response); // object hi print hua
		// console.log(response.json()); // do baar response.json nhi kr skte, 2 time consuming not allowed
		return response.json(); // for reading data from response call json method on that response object
	}).then(function(data) { // ab upr promise return kiya toh sab promise hogya ab vapis .then krlo
		console.log(...data);
	});
}

getCountryData('india');

Promises do not get rid of callbacks but they get rid of callback hell


...chain promises

.then method always return a promise if we return anything or not and agr hum kuch return kare toh vo full filled value hogi promise ki

.then promise return karega uske ander mt chain bna lena .then ke baad .then hoga naki .then ke ander .then .then dyaan dena

.then(response => response.josn().then(response ... yeh mt krna wrong tareeka IT WILL WORK but yeh phir callback hell bnadega

.then(response => response.json() idhr khtm hoga and next then peh loge uss promise ko).then( ... right way


... handling rejected

Jis promise mai error ai vo rejected promise h(settled mai)

const getCountryData = function (country) {
	// hr jagah err ka vo de skte but ek baar last mai catch krlo vo jyada better
	fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json, err => alert(err)).then(function(data) { 
		console.log(...data);
	});
}

const getCountryData1 = (country) => {
	fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
		return response.json();
	}).then((data) => { 
		console.log(...data);
	}).catch(function(err) {
		console.error(err); // err propogate downward neeche jate rahenge
	}).finally(() => { // it is always happen chaiye .then ho ya .catch error ho ya success koi frk nhi pdhta yeh chalega
		console.log('always called');
	});
}

.catch bhi promise return krta tabhi .finally chala coz vo promise peh hi chlta

response mai (ok=t/f dekhlo ya status dekhlo 404 yeh sab)

dekh jaise 404 error aya but fetch fxn ne promise reject nhi kiya usko phir tujhe khud krna padega reject by throwing Error

404 .catch mai nhi ja rha iske lia check ok property neeche dekho and error throw krdo

const getCountryData = (country) => {
	fetch(`https://restcountries.com/v3.1/name/${country}`)
	.then((response) => {
		console.log(response);
		if(!response.ok) {
			throw new Error(`Country not found (${response.status})`); // aise error throw hogya toh ek dum neeche chala jaiga sab .then skip krke
		}
		return response.json();
	}).then((data) => { 
		if(!response.ok) { // ab yeh hr jagah ho rha repetitve code iske lia helper fxn bnalo
			throw new Error(`Country not found (${response.status})`); // aise error throw hogya toh ek dum neeche chala jaiga sab .then skip krke
		}
		console.log(...data);
	}).catch((err) => {
		console.error(err);
	}).finally(() => {
		console.log('always called');
	});
}

error beech mai ajai toh create krlo error throw new Error krke vo catch mai catch hojaiga


...behind the scene

Each time event loop take callback from callback queue we say there is event loop tick

Web apis seh timer ke baad callback queue mai ate execute hone but udhr bhi waiting h toh zaroori nhi ki jo time set kiya tha uske baad hi run hoga usse jyada bhi wait krna pd skta h

It is gurantee ki 5 sec seh phele nhi hoga but 5 sec baad callback queue mai ajaiga uske baad jitni waiting vo wait karo

Stack empty hoga tabhi Event loop lega callback queue seh

Event loop does the orchastration of this entire js runtime

Js does not have sense of time coz everything which is aysnc does not happen in engine Runtime manages all the async behaviour and its the event loop which decides what will be executed next

Callback related to promises doesnot go in callback queue but jaise settimeout seh h toh callback queue mai jaigi, promises related callback goes in microtasks queue

microtask queue has priority over callback queue and check event loop hi krta phele sab microtask queue sesh chalega


... event loop 

Top level code (code outside any callback) will run first then microtask queue ke sare call stack khtm hone baad then callback queue ke saare

console.log('1'); // callstack wala
setTimeout(() => console.log(2), 0); // 0 sec mai hogya yeh baad mai hoga coz yeh callback queue ka h
Promise.resolve('Resolved promise 3').then(res => console.log(res)); // immediate promise resolve 0 sec mai but yeh microtask wala yeh phele hoga execute
Promise.resolve('Resolved promise 4').then((res) => { for(let i = 0; i < 10; i++){} }); //  phele for loop pura chalega phir 0 sec wala set timeout jo ki h 0 sec but chalega baad mai
console.log('4'); // callstack wala

.then and .catch and .finally mai kuch bhi likhdo code 

... create promise

Promises are special kind of object in js

// Promise contructor
const promise = new Promise((resolve, reject) => { // executor fxn it will contain asynchronous behavior
	console.log('hey');
	setTimeout(() => { // async ki feel coz promise async hi kaam h
		if(Math.random() >= 0.5) {
			resolve('param'); // response mai print hoga
		} else {
			reject(new Error('reject')); // error mai print hoga Error object 
		}
	}, 1000);
})

promise chl jaiga and uske ander ka code chalega

promise.then(res => console.log(res)).catch(err => console.error(err));

Promisifying is converting async call back fxn into promise based

const wait = function(seconds)  {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, seconds*1000); // callback fxn pass krdiya *1000 in ms wala and promise return krna is promisisfying
	})
}

wait(3) // wait for 3sec
.then(res => wait(2)) // wait for 2 seconds from last and overall 5sec
.then(res => console.log('hey'))
.catch(err => console.error(err)); // promise ne jitna wait krvana krvaiga tab jaige resolve hoga

Promise.resolve('abc').then(res => console.log(res)); // static method in Promise constructor, this means promise resolve immediately
Promise.reject('abc').then(res => console.log(res)); // static method in Promise constructor, this means promise reject immediately


...asycn await

// this fxn is runnign asynchoronously in background and it will not block the call stack
const whereAmI = async function(country) { // it is aysnc fxn and it will run in bg and return promise
	fetch('https://restcountries.com/v3.1/name/portugal').then(res => console.log('second'));
	const promise = await fetch('https://restcountries.com/v3.1/name/portugal'); // await is used to wait for result of the promise, bascially await will stop the code execution at this point of the fxn until the promised is full filled or settled(resolve, or reject)
	console.log(promise);
	console.log('second'); 
}

whereAmI('portugal');
console.log('first');

confuse mt hoiyo await stop karega but mircotask queue mai karega jab event loop seh aiga tab phele promise hoga then second print but first toh sabseh phele call stack mai hoga usko sabseh phele khali krna toh sabseh phele print hoga first then promise wala chalega

async await is syntactic sugar of promise .then.catch


const whereAmI = async function(country) { 
	// fetch('https://restcountries.com/v3.1/name/portugal').then(res => console.log('second'));
	const res = await fetch('https://restcountries.com/v3.1/name/portugal');
	const data = await res.json(); // yeh bhi promise de rha await krlo, promise peh hi hoga await setitmout in sab peh mt krne lag jana
	console.log(data); 
	console.log('second');
}

... try catch

try catch toh js mai phele seh h usko asyc await sath use kr skte 

const whereAmI = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`); // automatic reject nhi hua toh catch mai nhi ja rha isliye glt peh isliye !res.ok check krna pada
    if(!res.ok) {
	      throw new Error(`Country not found (${res.status})`); // isse reject ho jaiga and catch mai chala jaiga
    }
    const data = await res.json();
    console.log(data);
    console.log('second');
  } catch (e) {
    console.log(e);
  }
};


... returning values

const whereAmI = async function (country) {
  try {
   
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`); 
	      throw new Error(`Country not found (${res.status})`);
    }
    const data = await res.json();
    return data; // promise aiga
  } catch (e) {
    console.log(e);
    throw e;
  }
};
console.log(1);
// const city = whereAmI('portugal'); // yeh return data nhi de rha yeh promise de rah jisse sync js toh next line mai promise print krdegi jabki async toh alag chl rha dont get confused, and jo promise aya vo pending state mai h full fill nhi hua 
// console.log(city);

//promise aya tabhi .then hua
whereAmI('portugal').then((data) => {console.log(data);}).catch((err) => {console.log(err);}).finally(() => {console.log('done');}); // ab yeh toh old logic h toh isko bhi aysnc await mai karo
console.log(2);

// yeh use krlo 
(async () => {
	try {
		const data = await whereAmI('portugal'); // whereAmI promise hi h and jaruri nhi whereAmI seh promise ai 
		console.log(data);
	}
	catch(err) {
		console.log(err);
	}
	console.log('done');
})();


We can use await without asyc

...running in parallel

Promise. peh static fxn use ho rhe h

const get3Countries = async function(c1, c2, c3) {
	try {
		promise1; // aise krne seh acha ek ek ek wait kare promise.all krlo
		promise2;
		promise3; 
		// yeh upr ek ek krke wait krke promise2 then wait phir promsie 3, it is slow process

		const data = await Promise.all([promise1, promise2, promise3]); // agr ek sath run krne toh aise karo, it receives an array and return an array and it returns promise
		console.log(data);
	} catch(err) {
		console.log(err);
	}
}

Pormise.all mai seh ek bhi reject hua toh sab reject

it shortcircuits ek hojai tab

... promise combinator

1) Promise.race receives array of promises and it get settled when one first set get setteled and return promise only 
   race hogi sab promises jo phele hoya vo hojaiga bs

(async () => {
	try {
		const data = await Promise.race([whereAmI('portugal'), whereAmI('india'), whereAmI('usa')]);
		console.log(data);
	} catch(err) {
		console.log(err);
	}
})();

const timeout = (sec) => {
	return new Promise((resolve, reject) => {
		setTimeout(reject, sec);
	});
};

Promise.race([whereAmI('portugal'), timeout(0.01)]).then(() => {}).catch((err) => {});

2) Promise.allSettled 

takes [promises] and return all settled promises arr

es2020

it does not shortcircuit it will run for all promises and return result for all the promises

Promise.allSettled([whereAmI('portugal'), timeout(0.01)]).then(() => {}).catch((err) => {});

const data = Promi.. thori kr skta promise h await karo nhi toh .then karo 

3) Promise.any

es2021

it will only give resolved promises not reject promises




