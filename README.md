section 10

... coverting ..

numbers are floating point numbers hamesha decimal hi hote 

23 === 23.0 same baat h

numbers are represented in 64base2 format means numbers are stored in binary format that means 0 and 1

base10 0 to 9
base2 0 to 1

there are certain numbers difficult to resolve in base to (0.1)

0.1 + 0.2 === 0.3 false aiga

string to number 

console.log(Number('20'));

console.log(+'20'); // type cohesion hoke convert kardega number mai, use this cleaner lgta

number to string is +'' yeh krde

every fxn is also a object

Number is object

console.log(Number.parseInt('20px')); // by default 10 yeh karega ki number nikaldega and it is doing parsing

console.log(Number.parseInt('20px', 10)); // can give base 

console.log(Number.parseInt('20rem', 2));

console.log(parseInt('20em', 2)); // aise bhi call kr skte bina Number obj ke coz it is global fxn but in mordern js Number seh hi call karo

console.log(Number.parseFloat('20.23abc   ')); // more encouraged to use this in modern javascript

console.log(parseFloat('20.23abc   ')); // yeh floating point number nikaldega and spaces string sab ignore hogi

console.log(Number.isNaN('anb')); // checking ki not a number toh nhi and anb string h toh false aiga

console.log(Number.isNaN(20)); // yeh bhi false coz 20 number h

console.log(Number.isNaN(+'abc')); // yeh true aiga coz abc in number NaN h

console.log(Number.isNaN(23 / 0)); // /0 seh NaN aiga

console.log(Number.isFinite(2)); // oppo to isNaN, it checks if it is a number or not

console.log(Number.isInteger(23)); // check for integer


... rounding

console.log(Math.sqrt(24)); // sqrt

console.log(25 ** (1 / 2)); // sqrt hi h exponential ki help seh

console.log(25 **(1 / 3)); // cube root ** is expo

console.log(Math.max(3, 4, 5, 6, 1, '23')); // type cohehisoin krte h sab but parse nhi krte 

console.log(Math.max(2, 3, 4, 'abc2')); // NaN aiga parsing nhi h

console.log(Math.min(2, 34, 5));

console.log(Math.PI * Number.parseFloat('10px') ** 2); // pie r*2

console.log(Math.trunc(Math.random() * 6) + 1); // math random [0, 1) deta, trunc decimal htata roundoff nhi krta +1 isliye coz 1-6 chaiye dice roll mai

console.log((Math.trucc(Math.random() * (max - min)) + 1) + min); // yeh min and max ke beech mai dega number

console.log(Math.trunc(2.3)); // remove decimal 2

console.log(Math.round(23.4)); // pass mai round 23

console.log(Math.round(23.6)); // 24

console.log(Math.ceil(23.3)); // celing mtlb upr tarf round off 24

console.log(Math.floor(23.2)); // neeche taraf round off 23

yeh sab type cohesion peh chlte parsing peh nhi 

console.log((2.7).toFixed(0)); // to fixed return string and (2.7) (primitive) ki boxing krdega js mtlb ki (2.7) ko Number object mai transform krdega and usmeh method call krdega 

console.log((2.37).toFixed(2));


.. remainder 

console.log(5 % 2); // remainder operator

console.log(5 / 2); // divide

console.log(4 % 2 == 0); // even odd

function isEven(x) { // yeh bkr way likhne ka logic same h but code qual
  if(x % 2 == 0) console.log('isEven');
}

const isEvenSirWay = x => x % 2 == 0 ? 'isEven' : 'isOdd'; // good way


...numeric

const x = 287_349_222; // only for code redability output 287349222 hi aiga bs code redability is 287,349,222

const PI = 3._14; it is not allowed only placing between digits is allowed 

const z = Number('349_34'); // it will prinit NaN mtlb ki number jo API seh arha usmeh use mt karo


...big int

es2020

number are represented in 64 bits only 53 are used to store digits and others to store decimal

console.log(2 ** 53 - 1); // itna hi represent kr skta h normally 53 bits

console.log(Number.MAX_SAFE_INTEGER); // yeh and upr wala same 

console.log(2 ** 53 + 105); // yeh glt aiga sahi seh represent nhi kr paigi isliye BigInt aya

console.log(982403983209849283490293840923849023849); // yeh big int nhi h and precesion kum aigi 

console.log(203948230948203984092384092380480283408n); // big int h n aiga last mai output and input both mai

console.log(BigInt(230948092384092830940234234234)); // outputn n aiga last mai input mai BigInt likhdiya

bigint kelia opertor sab chalenge

console.log(1000n + 1000n);

big int sath kuch mix nhi kr skte

console.log(10 + 1000n); // error cant mix

console.log(10n > 10); // 10n == 10 h type alg h bs bigint h 10 hi

console.log(11n > 10); // true 11 > 10

console.log(10n === 10); // false type check alg

console.log(typeof BigInt); // bigInt

console.log(10n == 10); // true

console.log(Math.sqrt(16n)); // yeh nhi kr skte sirf comparison hi use kr skte

console.log(10n / 3n); // 3n dedega output rather than 3.3333


... Creating dates


console.log(new Date());

console.log(new Date('Aug 02 2021 18:05:41'));

console.log(new Date('oct 6 2023')); // yeh khud seh diya h js wali string use krlo upr jaise ki better coz reliable h and apni dene mai yeh h ki code break bhi ho skta mtlb pht bhi skta

console.log(new Date(account1.movementsDates[0])); // string deni h

console.log(new Date(2022, 10, 19, 15, 23, 5)); // (year, month (0 based h mtlb 0 january h), date, hours, secs, mili)

console.log(new Date(2022, 10, 31)); // js auto correct krdega as 31 nhi hota 30 krdega
  
console.log(new Date(0)); // 1 jan 1970 seh chlta

console.log(new Date(3*24*60*60*1000)); // 1 jan 1970 mai 3*24... mtlb 3 days add krdeta mtlb argument mai usne secs liya

const now = new Date(); // new date ajati timestamp mai (IST is indian standard time)

console.log(now.getYear()); // dont use this use fullyear

console.log(now.getFullYear());// use this for year

console.log(now.getMonth()); // use this for month

console.log(now.getDate());

console.log(now.getDay());

console.log(now.getMonth());

console.log(now.getMinutes());

console.log(now.getSeconds());

console.log(now.toISOString()); // International standards

console.log(now.getTime()); // yeh timestamp dega in milisecond from 1jan 1970

console.log(new Date(1681113054029)); // miliseconds mai add krdo vo total 1970 seh add hojaiga

console.log(Date.now()); // it gives timestamp in milliseconds of now

now.setFullYear(2040); // aise existing date mai change krne kelia


...operations 

const future = new Date(2037, 10, 19, 15, 23);

const now = new Date(); // yeh timestamp nhi h yeh abhi ki date h and date.now() timestamp h

console.log(future); // in string return hogi

console.log(now); // string return

console.log(+future); // yeh int mai convert hogi

console.log((+future - +now) / (1000 * 60 * 60 * 24)); // +future - +now seh milisecons milgya and usko convert krdiya days mai / krke

Math.abs(-10); // gives 10


... INTL dates

it is an api

it allows to format result according to different languages mtlb usa indian yeh sab naki cpp java

ISO language ke according 

day/month/year h ya month/day/year ya ... kya h language wise

console.log(new Intl.DateTimeFormat('en-IN').format(new Date())); // ismeh apna locale de skte ISO language ka and ismeh time nhi ata sirf date ati

const options = { // time nhi arha tha isliye jo chaiye vo object pass krdiya neeche
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // weekday: 'numeric',
  weekday: 'long',
}

console.log(new Intl.DateTimeFormat('en-IN', options).format(new Date()));

const locale = navigator.language || navigator.languageCode // browser seh language leke uske according locale de rhe

console.log(new Intl.DateTimeFormat(locale, options).format(new Date()));


...INTL numbers

console.log(new Intl.NumberFormat('en-IN').format(3249234.34)); // number ko format krdega locale ke hisab seh , lgadega yeh sab

console.log(new Intl.NumberFormat(navigator.language).format(3249234.34)); // navigator.language is ki browser seh language lagana

const options = { // yeh docs mai dekhlo
  style: 'currency', // 'units' 
  currency: 'INR', // 'celsius', 'miles-per-hour.....
}

console.log(new Intl.NumberFormat(navigator.language, options).format(3249234.34)); // options object pass kr skte


... settimeout

settimeout runs once after define time

and setinterval keeps running until we stop it

js hits settimout toh vo keep counting time in background and register this callback fxn in settimout to be called after the time has elapsed and immediately it will move to next line and this mechanism is called async js

const arr = [2, 3];

const timer = setTimeout((x, y) => console.log(x), 3000, ...arr); // callback mai pass krne kelia arguments time ke baad do and time ms mai h and arr[0] arr[1] bhi kr skte but noob way spread krdo

agr setTimout bina seconds toh 0 mana jaiga default

setTimeout(() => console.log(2)); // by default 0 sec but phir bhi last wala hey ke baad chalega iska reason baad mai dekho

if(arr.includes('2')) clearTimeout(timer); // clear bhi kr skte mtlb chlne seh rokh skte

console.log('hey'); // sabseh phele hey print hoga then setTimout chlega

setInterval(() => { // hrr 1000ms == 1s baad chalega pheli baari bhi 1000ms ke baad hi chalega immediate chalana toh uske lia alg fxn bnalo callback ka usko phele bahar call krdo then setInterval mai call
  console.log(new Date()); 
}, 1000);

fxn(); // immedaite calling
setInterval(fxn, 1000); // 1000 milisec baad calling

clearInterval(timer); // to stop kyuki vo hrr time baad chl rha isliye stop krdo usse

we can do this
const timer = setInterval(() => {clearInterval(timer)}, 1000); kehne ka mtlb clearInterval tu setInterval ke ander bhi call kr skta


