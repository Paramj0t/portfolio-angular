'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const request = new XMLHttpRequest();

// request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal');

// request.send();

// console.log(request.responseText);

// setTimeout(() => {
// 	console.log(1);
// 	setTimeout(() => {
// 		console.log(2);
// 		setTimeout(() => {
// 			console.log(3);
// 		}, 1000)
// 	}, 1000);
// }, 1000)

// const request = fetch('https://restcountries.com/v3.1/name/{name}');

// console.log(request);

// const getCountryData = function (country) {
// 	fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
// 		console.log(response); // object hi print hua
// 		// console.log(response.json()); // do baar response.json nhi kr skte, 2 time consuming not allowed
// 		return response.json(); // for reading data from response call json method on that response object
// 	}).then(function(data) { // ab upr promise return kiya toh sab promise hogya ab vapis .then krlo
// 		console.log(...data);
// 	});
// }

// getCountryData('india');

// const getCountryData = (country) => {
// 	fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
// 		return response.json();
// 	}).then((data) => {
// 		return fetch(`https://restcountries.com/v3.1/name/${data[0].capital}`);
// 	}).then((response) => {
// 		return 2;
// 	});
// }

// getCountryData('india');

// const getCountryData = function (country) {
// 	fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json, err => alert(err)).then(function(data) {
// 		console.log(...data);
// 	});
// }

// const getCountryData1 = (country) => {
// 	fetch(`https://restcountries.com/v3.1/name/${country}`)
// 	.then((response) => {
// 		console.log(response);
// 		if(!response.ok) {
// 			throw new Error(`Country not found (${response.status})`); // aise error throw hogya toh ek dum neeche chala jaiga sab .then skip krke
// 		}
// 		return response.json();
// 	}).then((data) => {
// 		if(!data.ok) {
// 			throw new Error(`Country not found (${response.status})`); // aise error throw hogya toh ek dum neeche chala jaiga sab .then skip krke
// 		}
// 		console.log(...data);
// 	}).catch((err) => {
// 		console.error(err);
// 	}).finally(() => {
// 		console.log('always called');
// 	});
// }

// getCountryData1('indiasdf');

// console.log('1');
// setTimeout(() => console.log(2), 0);
// Promise.resolve('Resolved promise 3').then(res => console.log(res)); // immediate promise resolve
// Promise.resolve('Resolved promise 4').then((res) => { for(let i = 0; i < 10; i++){} });
// console.log('4');

// promise contructor
// const promise = new Promise((resolve, reject) => { // executor fxn it will contain asynchronous behavior
// 	console.log('hey');
// 	setTimeout(() => {
// 		if(Math.random() >= 0.5) {
// 			resolve('param'); // response mai print hoga
// 		} else {
// 			reject(new Error('reject')); // error mai print hoga
// 		}
// 	}, 1000);
// })

// promise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function(seconds)  {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, seconds*1000);
// 	})
// }

// wait(3) // wait for 3sec
// .then(res => wait(2)) // wait for 2 seconds from last and overall 5sec
// .then(res => console.log('hey'))
// .catch(err => console.error(err)); // promise ne jitna wait krvana krvaiga tab jaige resolve hoga

// Promise.resolve('abc').then(res => console.log(res)); // static method in Promise constructor, this means promise resolve immediately
// Promise.reject('abc').then(res => console.log(res)); // static method in Promise constructor, this means promise reject immediately

// this fxn is runnign asynchoronously in background and it will not block the call stack
const whereAmI = async function (country) {
  // it is aysnc fxn and it will run in bg and return promise
  try {
    // fetch('https://restcountries.com/v3.1/name/portugal').then(res => console.log('second'));
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`); // await is used to wait for result of the promise, bascially await will stop the code execution at this point of the fxn until the promised is full filled or settled(resolve, or reject)
    if(!res.ok) {
	      throw new Error(`Country not found (${res.status})`);
    }
    const data = await res.json();
//     console.log(data);
//     console.log('second');
    return data;
  } catch (e) {
    console.log(e);

    // Reject promise returned from async fxn
    throw e;
  }
};
// console.log(1);
// // const city = whereAmI('portugal'); // yeh return data nhi de rha yeh promise de rah jisse sync js toh next line mai promise print krdegi jabki async toh alag chl rha dont get confused, and jo promise aya vo pending state mai h full fill nhi hua 
// // console.log(city);

// // whereAmI('portugal').then((data) => {console.log(data);}).catch((err) => {console.log(err);}).finally(() => {console.log('done');});
// // console.log(2);

// (async () => {
// 	try {
// 		const data = await whereAmI('portugal'); // whereAmI promise hi h and jaruri nhi whereAmI seh promise ai 
// 		console.log(data);
// 	}
// 	catch(err) {
// 		console.log(err);
// 	}
// 	console.log('done');
// })();

// const get3Countries = async function(c1, c2, c3) {
// 	try {
// 		promise1;
// 		promise2;
// 		promise3; 
// 		// yeh upr ek ek krke wait krke promise2 then wait phir promsie 3, it is slow process

// 		const data = await Promise.all([promise1, promise2, promise3]); // agr ek sath run krne toh aise karo, it receives an array and return an array and it returns promise
// 		console.log(data);
// 	} catch(err) {
// 		console.log(err);
// 	}
// }

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

Promise.allSettled([whereAmI('portugal'), timeout(0.01)]).then(() => {}).catch((err) => {});

Promise.any([whereAmI('portugal'), timeout(0.01)]).then(() => {}).catch((err) => {});
