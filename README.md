section 15(TOOLS js) and 16(imp topics)

dev dependecies alg hoti dependcies seh coz dev wali sirf develeopment kelia use ati bs ... jo code mai use ho vo dependecnes

import ___ from ''

export jo kr rhe vo public api h

script hi scripting h and modules alg

module ka camelCase name rakho

extension lagana es6 mai jaroori nhi h

Promise.allSettled([whereAmI('portugal'), timeout(0.01)]).then(() => {}).catch((err) => {});

import './shoppingCart.js'
import './shoppingCart' // bina extension ke chl jata es6 

./ is current location

import statement at top of module

and export statement at top level code

if() {
export
} not allowed coz top level code mai nhi h

export const addToCart = () => { // yeh named export h
	console.log('object');
}


import { addToCart, ship as shippp } from './shoppingCart'

import * as ShoppingCart from './shoppingCart';

addToCart();

ShoppingCart.addToCart();

2 types ke export hote named and default upr jo h vo named h

import export copy nhi banata it is live connection ki udhr seh add kiya toh udhr jake array mai add hogya and usko import kiya toh empty array nhi jo add hua uske sath aya coz live connnection

live connection means it points to same place in memory


...module pattern

jo bhi cheeze module mai h vo console dev tools mai bhi nhi chl rhi kyu ki dev tools console is global scope 

data encapsulation

const ShoppingCart2 = (function () {
	//yeh sab private
	const cart = [];
	const shoppingCart = 10;

	const addToCart = () => {
		console.log('object');
	}

	return { // return obj mai vo cheeze jo public krni
		addToCart, // addToCart: addToCart idhr create hua h and uske pass cart ki access h kaise? due to closures allow fxn to have access to all variables that were present at its birthplace
		// addToCart ki birth place call back fxn h jo banaya and vo kabhi connection loose nhi karega usse 
	}
})();

... common js

1 file is 1 module in es6

Es6 module sab replace krdegi

//export in common js (Node)
export.addToCart = () => {
	console.log('object');
}

//import in common js (Node)
const {addToCart} = require('./shoppingCart');


... kuch faltu parts section ke 

... clean code

Declarative jyada use ho rhi h modern way mai

mix kro dono ko immertive and declaritive karo

Object.freeze({}) seh immutable hojata ki chnage na ho kabhi

Object.freeze freezes only first level of object deep freeze nhi krta

impure fxn hote ki jo global ko change kr rhe isliye tum vo mt karo tum change karo fxn(param) pass krke jisse sahi vo pure honge copy change karo aise state change mt karo

mujhe lga tha copy bannae seh bt hoti but aise nhi h copy hi bnao js mai toh

param pass krne seh copy bn rhi and usmeh change ho rha good way

console.log is sideeffect thore sideeffects ho skte no problem

if(!user) user = 'param' krne seh acha defuault params ka use karo ... yeh cheeze sekho native features ka use karo

ternary seh acha optinal chaining use karo .. socho read code more durso ka acha code


