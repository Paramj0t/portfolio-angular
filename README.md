isse phele ka telegram peh

video wise
----------

Mark krliyo ppt mai

... likhna bhul gya


Jit mai koi portable file nhi h immediate execution hojati compilation ke baad

AST is abstract syntax tree, it is a ds and is different dom tree
AST code ko pieces mai baat deta h and ek structured form mai tree mai represent krdeta h
It also check syntax error
And this tree generate machine code

js engine unoptimized version bnaleta h machine code ka phir usko optimised krta rheta hai recompilation hoti rheti this process makes engine fast

heart of js runtime is js engine


web api are accessible on global window object js mai nhi hota khud seh

js runtime mai js related stuff, web apis and callback queue(ds related to callback fxn)

callback fxn examples onClick, timer...

callback fxn is put in callback queue. when call stack becomes empty then callback fxn is passed in stack so that it can be executed and yeh pura process event loop ki help seh hota h

js runtime in browser is different from js in node as in node there will be no web apis there will be cpp bindings and thread pool etc


... likhna bhul gya


global execution context is created for top level code

execution is computer cpu executing the machine code

Global exection context ek hota hai fxns kelia apne bante rhete

All these execution context make the call stack

Js Engine consists of memory heap and call stack

return krne seh fxn execution context popped out from call stack

call stack keep order of execution just like the map does

global exectuion context tabhi pop hoga jab browser close hoga


... scope

fxn are just values stored in variables

block means everything between {}

ES6 mai block scope aya and vo let const peh lgta var peh nhi lgta
var variables can be accessed outside the scope nhi block scope
var is fxned scope not block scope isliye vo parent vale mai chala jaiga

let and const are also blocked scope

fxn are blocked scope in strict mode and generally strict hi use krte h

varibales fxn and arguments work same in scoping

parent scope does not have access to inner scopes

siblings scopes doesnot have access to each other (lexical scoping)

scope chain has nothing to do with execution context

scope chain in certain scope is equal to adding together all variable enviornment of all the parent scope.


... scoping in practice

chaiye neeche declare krlo chai upr global scope toh global hi rahega

phele toh global scope banega toh pura global banega toh koi problem nhi ki neeche declare karo ya upr

ya toh string white print hoti ya '' quotes ke ander in dev console.

agr same name h toh scope chain ke hisab seh dekhega and chalega ismeh new create hua

and inner scope mai change kr skte outer scope ke variables ko ismeh new variable create nhi hua


... hoisting

TDZ temporal death zone - it is ki jis scope mai define toh udhr pura access krna chaiye but nhi kr pate us zone ko tdz bolte const let mai and error ajata
var mai undefined ajata

Each let and const variables get their tdz that starts with begining of scope till the line where it is defined

variables are only save to use after tdz

... practice hoisting

fxn decl behaves like var
fxn expr and arrow will not work if used with let and const and with var it will not work also but error will be different becoz var jo h vo bolega ki undefined h but hum undefined peh call karenge fxn and error aiga ki it is not a fxn.

only fxn we can use before declaring is declaration fxn

dont use var 
why?

if(!num) fxn(); // here var is undefined if(!undefined) is true toh fxn chl jaiga

var num = 2;

function fxn() { 
	console.log("object");
}

Window obj in console likdho window

window obj mai var variables hote let const nhi hote

... this keyword

this keyword gives window object

agr strict mode nhi h toh this keyword jo hai vo window object ko point karega fxn mai strict h toh fxn mai not defined aiga

arrow fxn does not get their own this keyword it uses lexical this keyword which means it uses this keyword of its parent

... this keyword practice

jis obj mai this keyword use kiya kya this vo obj dega nhi this vo obj dega jisne us fxn ko call kara hai

method boring is 

const obj = {
	name: 'param',
      age: 2,
	fxn: function() {
		console.log(this);
	}
}

const obj2 = {
	name: 'paramjot'
}

obj2.fxn = obj.fxn; // method borrowing

obj2.fxn();

isse pta chala jo obj call kr rha usko point karega this keyword

const val = obj.fxn;

as we know fxn is a value so we can store it in a variable

dekh agr tune method ko variable mai store kr ke fxn call kiya toh this keyword undefined hoga cause obj.fxn nhi kiya fx(); store krke call kiya toh this kahi refer nhi kr paiga

object literal is not a code block 
const obj = {
} yeh krna is not code block iska scope nhi banega

if try to access property and vo property nhi exist krti toh error nhi undefined aiga

yeh ek or reason h var na use krne ka aise or bhi h

and method ko arrow fxn mt bnao fe ya fd rakho


const obj = {
	name: 'param',
        age: 2,
        fxn: function() {
                console.log(this.name);
		const self = this; // old sol
		const age = function() {
			console.log(self);
		}

		const age1 = () => {
			console.log(this);
		}

		age(); // yeh regular fxn call h toh iska this toh undefined hi aiga na
		age1();
        },
	fxn1: () => {
		console.log(this.name)
	}
}

fxn mai we have clg(arguments) keyword to know the argument

it exists in regular fxn like fe and fd not in arrow

function addExpr(a, b) {
	console.log(arguments);
	return a + b;
}

const addExpr = function(a, b) {}

addExpr(1, 2, 3, 4); // 2 accept kr rha kitne bhi bhej skte js mai kuch bhi kr skte allowed hai

... primitive and obj

primitive type execution context mai h jo call stack mai h and objects(object literal, arrays, fxn ...) yeh sab heap mai stored h

let ya const mai value at certain memory add is immutable
agr change krta let ya const mai const mai toh kr nhi skta let mai krta toh new piece of memory allocate hoti jistmeh memory address and value both hoti

dekh obj toh heap mai bna but jis variable mai store hua vo toh stack mai h

all variable declared with const are immutable only true with primitive value not with reference value

const obj = {}

ander ki values change kr skte chaiye const ho ya kuch bhi coz yeh reference value h

call stack mai value change nhi hoti agr hoti h toh new address sath hoti 

primitive mai value change kri toh new add mai hui and reference mai value change ki but value mai toh heap ka address tha toh value change nhi hui heap mai changes hui value toh new nhi create hua

const oage = age mtlb new bana
const obj2 = obj mtlb usi ko point kiya

... prac primitve vs obj

{} empty obj hota aise

let mai can change val but new address bn jata

const mai cant change value only.

agr asli mai copy krna h obj sirf ref nhi toh 
const friend = Object.assign({}, me);
it is shallow copy not deep copy (diff kelia code dekho)
mtlb ki empty object mai me object copy hogya puri tarah changes will not affect each other

deep copy mai jo nested objects bhi h vo bhi ek dusre seh affect nhi honge but shallow copy mai bahar wala obj hi affect nhi hoga but ander wala ek dusre mai change leke ajaiga

Deep clone is difficult it can be done with 3rd party lib lodash.
