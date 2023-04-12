section 8

... array destructuring

it is es6 feature basically a way of unpacking the values from array and object.

it breaks complex ds down into smaller ds like variables

In array we use destructuring to retrieve element from array and store them into variable.

const [x, y, z] = arr;

array h toh square brackets

const [first, , second] = restaurant.categories;

yeh jo h first and second const hai and global declare h reuse nhi kr skte

jo chaiye uske variables bnao jo nhi chaiye beech mai hole chd do

[second, first] = [first, second]; // aise swapping krdi with help of destructuting temp variable in sab ki zaroort nhi

array return [1,2,3] aise bhi kr skte and array destruct bhi kr skte [x, y, z]

const nested = [1,2, [3, 4]];

const [i, , [m, n]] = nested;

destructuring mai destructuring krdi h and yeh kr skte 

const [p, q, r] = [1, 2];
const [p = 1, q = 3, r = 4] = [1, 2]
yeh default value set krdi hai
console.log(p, q, r);

const arr = [1, 2, 3];
console.log(arr[4]);

jo value nhi h usko access kr pa rhe but vo undefined aigi error nhi aiga dono case mai

... object destructuring

destructure obj we use {} coz aise hi create krte h obj ko

In object des.. we need to give exact properties name (key name) to destructure and in object order does not matter so we need not to make hole while des..

and destructuring mai new variables hi bn rhe chaiye arry ho ya obj

as we know ki hume property name dena hota so agr hume apna name specify krna ho toh we can give our name 
const {name: ourName, x: y} = obj;

and here also we can give default values jaise arr mai di thi

and we can set both together default value and diff name

idhr bhi mutate kr skte mtlb ki swapping kr skte 

let a = 2;
let b = 3;

const object = { a: 1, b: 2, c: 3 };

({a, b} = object);

console.log(a, b);

jaise api seh data aya and uska same name hua jo variable humne kahi upr banaya toh bt hojaigi isliye upr wala tareeka use kr skte

nesting kr skte h obj mai bhi like arr

const {name, openingHours : {thu, fri}} = restaurant;

thora diff h array seh coz idhr order matter nhi krta and idhr property name chaiye hota isliye diff syntax

fxn mai bhi arguments mai kr skte des..

object mai order matter nhi krta naming matter krti phir seh bta rha


... spread operator

const arr = [1, 2];

const ar = [3, 4, arr[0], arr[1]]; // yeh and neeche wala same

const a = [3, 4, ...arr]; // isse values ajati

const b = [3, 4, arr]; // isse pura array ata

spread operator takes out all the values but does not create new variable

const shallowCopy = [...arr]; // yeh object.assign wala hi tha yeh better way h

const joinArr = [...shallowCopy, ...arr];

spread operator works on all iterables(arr, map, strings sets... except objects)

const str = 'param';

const letters = [...str, 'jot']; // isse array banega but ...str seh 'p' 'a' ... sab alg alg baat jainge

console.log(...str); // yeh allowed h

console.log(`${...str}`); // yeh not allowed coz ${} sirf ek value mangta h and ...str jyada values return krta

const input = [prompt('let\'s make something')];
const input = [prompt("let's make something")]; 
quotes use krle ya \ isse escape hoja

es18 mai spread operators only work on objects even though they are not iterables

ismeh object ke ander object iteratable h but ...krke print nhi kr skte

const obj = {
  a: 1,
  b: 2
}

const arr = [1, 2]

console.log({...obj});

console.log(...arr);

difference in printing in arr or obj


... rest pattern and rest parameters

rest is opposite of spread as it packs element in array

const [a, b, ...others] = [1, 2, 4, 5, ...[1, 2]];

...others jo h vo array bn jaiga remaining elements ka and yehi rest pattern h

rest pattern sabseh last mai hona chaiye coz vo jo bache h vo select karegi but jo skipped h vo nhi dyaan seh soocho

iska mtlb ek hi rest pattern ho skta ek array mai

const {sat, ...weekdays} = restaurant; iska mtlb ki ...weekdays obj h 

rest pattern array mai krta by default

const add = function(...numbers) { // yeh rest params hogya which can accept any number of parameters
  console.log(numbers); // yeh [] dega
  console.log(...numbers); // yeh array ko spread krke
}

add(1, 2, 3)
add(1, 2, 3, 4)
add(1, 2, 3, 4, 5)

...number krne seh array bhi bhej skte and normal params bhi mtlb kuch bhi bhejdo params mai

rest pattern can be used where varibles name can be separated by commas not values


...short circuiting(&& and ||)

they can use any data type 

they can return any data type

and they do short circuiting - it means agr furst value is truthy value toh vohi return hojaigi and agr falsy hui toh second value return hojaigi mtlb kehna ki jo bhi h first truthy value mile vo return hojaigi

|| sirf pheli truthy tk chalega uske baad nhi chalega

agr sab false || mai toh last wala false print krdega

const y = x ? x : 3;

const z = x || 3;

yeh dono cheeze same h

&& operator works exactly oppo to ||

x && obj.fxn() mtlb ki x exsits krta h toh run obj.fxn


... nullish

es2020 ka feature h

? this works with falsy values

?? this works with nullish values(null and undefined not 0 or ' ')

?? this means ki x ?? 10 mtlb ki x null ya undefined nhi h toh return x hoga nhi toh 10


... for of loop

es6 feature

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

for(const itme of menu) {
  console.log(itme); // only values index kelia neeche wala eg
}

in for of loop we can continue and break

for(const item of menu.entries()) {
  console.log(item); // in item mai index number bhi h and values bhi h [index, value] array mai h
  console.log(...item); // as we know it is an array toh spread kr skte h rather than item[0] yeh sab karo...
}

for(const [i, j] idhr bhi kr skte directly

console.log([...menu.entries()]); // [... ] krke kyu kiya baad mai btainge


... object literals 

it is literally jo tune {} object likha h vo hota

ek glti kr rha tha const let baad mai bnaya or obj mai access kr rha yeh nhi kr skta

as we know order does not matter in object toh jo console seh print ho rha h vo jo order arha alphabeticall arha h

mtlb key mai tu kuch bhi kr skta hai any operation

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  // obj1: obj1,
  obj1, // ab aise likh skte h
  // fxn: function() {
    //   console.log('param');
    // }
    fxn(a, b) { // direct fxn likhdo aise
      console.log(a, b);
    },
    [arr[0]]: 1, // [key] krna padega isse array nhi bn rha isse ab key aise likhta toh arha [key] aise
}


... optional chaining

sab jagah abhi tk camelCase hi h

if(restaurant && restuaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

console.log(restaurant?.openingHours?.mon?.open); // ?. is optional chaining ki gai h ki agr restaurant h toh hi check openingHours agr koi nhi h toh undefined ajaiga

use it when we dont know ki yeh property h ya nhi

isse undefined aiga naki error, agr tu undefined.property krta toh error ata undefined?.property karega toh undefined hi aiga

if we want to use variable name as property name we should write [variable]

?. and ?? are based on nullish values

for(const day of days) {
  // console.log(day);
  restaurant.openingHours[day];
  console.log(restaurant.openingHours[day]?.open || 'closed'); // yeh isliye change kiya coz 0 peh closed print hojata
  console.log(restaurant.openingHours[day]?.open ?? 'closed'); // yeh isliye kiya coz nullish value peh based hai and [variable == day]
  console.log(restaurant.openingHours.fri?.open); 
}

console.log(restaurant?.openingHours?.(0, 1) ?? 'method does not exist'); // dekh ismeh error aiga kyuki jo cheez defined h and tu usse glt cheez kelia use kr rha toh ?. optional chaning bacha nhi paigi error aiga optional chaning undefined cheez seh bachaigi
console.log(restaurant?.xyz?.(0, 1) ?? 'method does not exist'); // ismeh optioinal chaining bacha legi coz xyz define nhi toh undefined h nullish value h

console.log(days[0]?.name ?? 'does not exist'); // array mai bhi chlti both optional and nusling


... looping objects 

Objects are not iterable so for of nhi chl rha tha directly indirect way dekhte h abhi

object peh normal for bhi nhi chlta

for(const day of Object.keys(restaurant.openingHours)) {
  console.log(day); // key
}

const properties = Object.keys(restaurant.openingHours); // keys
const values = Object.values(restaurant.openingHours); // values

const kvarr = Object.entries(restaurant.openingHours);
console.log(kvarr); // [array(key, value ka), array.....]

for(const x (idhr key, value bhi kr skte) of kvarr) {
  console.log(x); ek ek array in 2D array spread bhi kr skte
}

for(const [key, {open, close}] of kvarr) { // mai kr rha tha [key, value: {a, b}] yeh tab chlta jab {key, value: {a, b}} bahar wala obj hota but nhi h coz obj mai name chaite array mai toh order seh hojata
  console.log(key, value);
  console.log(key, open, close);
}


... sets

es6 mai sets and maps ai phele obj and arrays hote the

set is unique values hoti h usmeh

const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta', 'pizza']);
print hoga pasta pizza risotto coz unique, dup ko remove krdega

it can hold various data types

it is iterable just like arrays

key value nhi h print array ki tarah hota

console.log(new Set('param')); // print hoga 'p' 'a' 'r' 'a' 'm'

console.log(ordersSet.size); // size ajaiga
console.log(ordersSet.has('pasta')); // .includes array ki tarah

ordersSet.add('param');
ordersSet.delete('pasta');
ordersSet.clear();

set mai indexing nhi hoti ordersSet[0] yeh sab nhi kr skta

for(const order of ordersSet) { // as we know sets are iterable
  console.log(order);
}

const arr = [...ordersSet]; // set seh arr mai aana


... maps

maps mai key value pair hote and key idhr kuch bhi ho skti number string obj kuch bhi but objects mai key string hi hoti

const rest = new Map(); // new map bna

rest.set('a', 1);
rest.set(2, 1);
rest.set([1, 2], 1);
rest.set([1, 2], 1);
rest.set(true, 1);
rest.set([1, 2], 'param').set('a', 1); // chaining kr skte

console.log(rest); // map print
console.log(rest.set({a: 1}, 1)); // map print hoga pura hi but is k,v ko add krke hi

console.log(rest.get(true)); map.get(key)

yeh primitive ke sath toh work karega .get but objects sath dekh

console.log(rest.get([1,2])); // [1, 2] key hone baad bhi yeh nhi chl rha coz yeh same obj nhi h as it is alg reference address islye const arr bnake krle toh sahi hojaiga

ab humare pass key boolean value h toh rest.get(x > 2) aise kr skte h

jo value nhi hogi usmeh undefined hoga

js undefined jada deti h error seh xD

console.log(rest.has('param')); // contain krta h ya nhi

rest.delete(true); // map.delete(key)

console.log(rest.size); // size () paranthesis nhi h kisi bhi size mai

rest.clear(); // clear map

const question = new Map([  // 2D array bnao
  ['a', 1],
  ['b', 2],
  ['c', 3],
  [true, 4],
  [false, {a: 1, b: 2}]
])

console.log(question);

const newMap = new Map(Object.entries(openingHours) // yeh bhi 2D array h); // Object seh map banana

Maps are iterables for of loop chalega

hai yeh 2D array hi ek tarah seh isliye iteratable h

console.log([...question]); // map seh 2D array

console.log(question.entries()); // print krne kelia iterator print hoga
console.log([...question.entries()]); // sahi seh print krne kelia

console.log(question.keys());

console.log(question.values());


... which ds to use


when methods h toh use obj coz this keyword seh vo obj access kr painge

json mai bhi objects

objects array > maps >>> sets


... strings

const str = 'paramjot singh';

console.log(str[0]);
console.log(str[100]); // agr glt access kr rha toh error nhi undefined aiga
console.log('paramjot'[2]); // aise bhi kr skta same baat
console.log('paramjot'.length);

console.log(str.indexOf('a')); // first occurence

console.log(str.lastIndexOf('a')); // last occurence

console.log(str.lastIndexOf('singh')); // yeh and iske neeche same baat pheli wali hi s ka deti pure word mai bhi but pura word check zaroor krti nhi mila toh -1 return krti
console.log(str.lastIndexOf('s'));

console.log(str.slice(4, 7)); // yeh substr bnadeti 4 index seh and this does not change the main string and it is actually imposible to mutate strings as they are primitve values and yeh return krta h new string
[start, end) length = end - start (index hi h)

console.log(str.slice(-2)); // ulta chlne lag jaiga back seh

console.log(typeof new String('paramjot')); // yeh object 

console.log(typeof new String('paramjot').slice(-1)); // .slice seh string milega typeof

console.log(str[0].toUpperCase() + str.slice(1).toLowerCase()); // phela caps mai baki bacha lower mai and concat krdiya

const a = 'Param';
const b = 'param';

const lowerA = a.toLowerCase();
const trimA = lowerA.trim(); // white space htane kelia es2020 mai age peeche ke trim wale alg h

const newA = a.toLowerCase().trim(); // same baat sath bhi kr skte

const lowerB = b.toLowerCase();
const trimB = lowerB.trim();

const newB = b.toLowerCase().trim();

const x = a.replace('P', 'p').replaceAll('a', 'A'); // replace return string and isliye usmeh .replace ki chain lga skte hai
const y = a.replace('Par', 'p').replace('a', 'A');

console.log(a.includes('a')); // .includes return boolean 

console.log(a.startsWith('Pa')); // return boolean

console.log(a.endsWith('P')); // return boolean

and sab case sensitive hai

const str = 'paramjot singh headfjjlklsdf';

console.log(str.split('j'));

const [firstName, lastName] = str.split(' ');

const string = ['Mr', 'param', firstName, lastName].join(' '); // by default join karega , seh sepcify krdo toh usse join krdega

console.log(string);

const str = 'param';

console.log(str.padStart(20, '+').padEnd(30, '+')); // padStart(length ki string bnadega jinti jaga bachegi usmeh + daaldega)

const mask = function(num) {
  const str = num + ''; // tostring new string bhi kr skte the but pro khelo + '' string mai convert hojata

  const newStr = str.slice(-4).padStart(str.length - 4, '*'); *******0034 last 4 digit dikana baki mask krdena

  console.log(newStr);

}

mask(2487329480928349024);
mask('2487329480928349024');

console.log(str.repeat(4)); // isse repeat hojati string ek baari mai utni baari jitne di gai h
