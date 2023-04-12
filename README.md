Section 9

...array methods

arrays are object tabhi unke methods h built in

.slice() // yeh hamesha left to right hi jata jaise .slice(-2) h toh 2nd last index seh end tk h front tk nhi yeh yaad rakhi

.slice(1, -2) mtlb 1 index seh 2nd last tk

does not mutate the original array (does not change the original array)

console.log(arr.slice()); // both for shallow copy use any
console.log([...arr]);

.splice is same as slice but ismeh original array mai change hoga

does mutate the original array (does change the original array) 

.splice krke jo splice kara vo mil jaiga and bacha hua arr mai rhejaiga mutate krdega

[1, 2, 3, 4]

console.log(arr.splice(2));  [3, 4]

console.log(arr); [1, 2]

console.log(arr.splice(-1)); // remove last element from array

console.log(arr.splice(2, 3)); // beech ka hissa remove krdegi

console.log(arr.reverse()); // reverse arr and it mutates the array

const letters = arr.concat(arr1); // mutate hoga mtlb ki arr mai arr1 bhi ajaiga WRONG mtlb likha sahi h but yeh mutate nhi ho rha letters mai arha sab arr mai nhi
console.log([...arr, ...arr1]); // mutate nhi hoga same baat

console.log(arr.join('')); // isse puri ander ki cheeze join hoke string bn jaigi chaiye ander string ho ya number ya kuch bhi banega string


... new method

es2022

const arrr = [1, 2, 3];
console.log(arrr[0]);
console.log(arrr.at(0));

console.log(arrr[arrr.length - 1]) // .length karo bt karo
console.log(arrr.at(-1)); // last index wala ajaiga

it also works on string

.at use kr skta sahi h and [] yeh bhi kr skta bracket notation

... for each

for (let movement of movements) {
for(let [i, movement] of movements.entries()) { [index, movement] h
  if (movement > 0) {
    console.log(1);
  } else {
    console.log(2);
  }
}
ismeh break continue chl jate h

forEach higher order fxn and function is callback fxn
movements.forEach(function(movement, index, array) { // 0: function(200) 1: function(450) 2: fucntion(400) mtlb yeh h ki jo movement h vo arr[i] h ek tarah seh
if(index === 1) break; nhi kr skte yeh   
if(movement > 0) { // movement is value arr[i], index is index, and array is array and isi order mai likhne h params
      console.log(movement, index, array);
   } else {
      console.log(2);
   }
})

for each mai break continue nhi chalega


... for each in maps and sets

currencies.forEach(function(value, key, map) { // map mai value same as arr[i], key as index and map as arr
  // console.log(value, key, map);
});

// currenciesUnique.forEach(function(value, key, map) { // set mai bhi value key map same, key and value is same in set mtlb key ki koi zaroort nhi
// currenciesUnique.forEach(function(value, value, map) { // 2 params ka same name nhi ho skta dimag lagao
currenciesUnique.forEach(function(value, _, map) { // _ it is throw away variable, variable which is unessesary
  console.log(value, map);
});

... map filter reduce

string methods alg h iteratable ke alg h array ke alg h

...map

const newArr = movements.map(function(movement) { // for each loop tarah hi h and ismeh new array milega mutable nhi h
  return movement * eurToUsd; // yeh values bnti rahegi new arr mai us index mai jo tu return karega
})

console.log(movements, newArr);

map filter reduce iteratable ke nhi array ke h

Global variable seh bhi access kr skte ho lekin not good way hamesha fxn(pass) krdo jisse sahi rahega global sath mt khelo

array ata 


... filter


const array = movements.filter(movement => { // filter krdega yeh bhi
  return movement > 0;
})

array ata


... reduce

const sum = movements.reduce((accumulator, cur, i, arr) => { // accumulator mtlb usmeh add ho rhe h return ki help seh and sab kuch sum mai ajaiga
  return accumulator + cur;
}, 0) // init value of accumulator 

yeh ek value ati last mai

const max = movements.reduce((accumulator, cur, i, arr) => {
  if(cur > accumulator) return cur; // return krna mtlb accumulator mai store krvana
  else return accumulator;
}, movements[0])


...chaining of array methods


const ans = movements.filter((c, i, arr) => c > 0).map((c, i, arr) => c * 10); // chaining kr skte ho but array jo return kare usmeh hi number peh chain kaise hi lagai ga obvio

array ke methods h toh filter map peh chain kr skta reduce peh nhi coz reduce array nhi h single value h

map ka array filter ka array seh jo aya usmeh work kr rha h toh map mai arr filter ka arr h

jyada chaining mt karo kum hi karo

jismeh mutate ho rha unko chain mt karo jaise splice jaise reverse 


...find

console.log(movements.find(mov => mov < 0)); // find method bhi for each ki tarah hi h pure array peh traverse karega jispeh first match krjai vo return krdega and rukh jaiga
mov is cur is arr[i] 

array of objects bht chlta h

console.log(account.find(obj => obj.owner === 'Param')) // array of objects h obj aya match kiya yeh element return karega array ka or vo object h


...findIndex


same as find bas index dedega and syntax sab same .findIndex

it is diff from indexof coz usmeh sirf true false ata and callback nhi pass kr skte the sirf value seh search karo idhr kr skte call back and ache seh search kr skte


... some and every

console.log(movements.includes(-130)); // ismeh -130 ki jagah condition check nhi kr skte 

console.log(movements.some(mov => mov > 0)); // include mai agr condition check krni ho toh use .some, callback seh check condition in callback return t/f

dono return t/f

console.log(movements.every(mov => mov < 0)); // agr sab true hui toh condition peh tab t return hoga nhi toh false

const fxn = mov => mov < 0;
console.log(movements.every(fxn)); // callback fxn ko aise bhi pass kr skte call mt krna


...flat and flatMap 

const arrr = [[1, 2, 3], [4, 5, 6], 10]; // ismeh jo nested array h vo bahar ajainge and ek bahar ainge [1, [2, [3]]] hoga toh [1, 2 , [3]] aise hoga sab ek ek bahar

console.log(arrr.flat(kitna deep jana btado)); // no callback fxn this time xD

nest ke ander nest ke ander nest toh btado kitna deep jana params mai 

flatMap combines flat and map together and it only goes one level deep usse neeche jana toh flat hi use krke chain krna padega map sath

it return array


... sorting


const owners = ['param', 'taran', 'hey'];

console.log(owners.sort()); // .sort mutate krdeta h === console.log(owners);

const x = [1, 2, 3, 4, -1, -2, -3];

console.log(x.sort()) // number peh sorting string ki tarah hoti isliye output ata -1 -2 -3 1 2 3 4 aise naki -3 -2 ...

agr number mai krni toh callback do

// return < 0 A, B (keep order)
// return > 0 B, A (swicth order)

console.log(x.sort((a, b) => {
  return a > b ? 1 : -1; // number here does not matter 0 seh bada ya chota hona chaiye
  return a - b; // math lagao dimag
}) );

and yeh sab .sort mutate hi krdeta

and mix datatypes mai nhi work karega


... create arrays

typeof array is object as you know

console.log([1,2,3]);

console.log(new Array(1, 2, 3));

const y = new Array(1, 2);

const x = new Array(7); // single param dega toh 7 size ka empty array create hoga EMPTY yaad rkha 0 nhi 

x.fill(0); // isse hr jagah 0 fille hojaiga

x.fill(1, 3, 5); // isse (1 fill hoga, start, end)

const z = [1, 3, 4];
z.fill(100, 2, 3); // 100 fill start = 2, end = 3

new array banake fill krne seh acha use .from directly steps bachao

const y = Array.from({length: 7}, (cur, i) => i); // (obj size btado, callback(current, currIndex) kuch bhi krlo)
const z = Array.from({length: 7}, (_, i) => i);






