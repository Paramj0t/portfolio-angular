// // import './shoppingCart.js'
// import { addToCart, ship as shippp } from './shoppingCart'
// import add from './shoppingCart';
// import add, {addToCard} from './shoppingCart';

// import * as ShoppingCart from './shoppingCart';

// addToCart();

// ShoppingCart.addToCart();

const ShoppingCart2 = (function () {
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

console.log(ShoppingCart3);

//export in common js (Node)
export.addToCart = () => {
	console.log('object');
}

//import in common js (Node)
const {addToCart} = require('./shoppingCart');
