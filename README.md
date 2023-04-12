// Exporting moduleso

const ship = 10; // scope to the module yeh sab private inside this module 

export const addToCart = () => {
	console.log('object');
}

export {ship, addToCart as add}; 

export default addToCart = () => {
	console.log('object');
}
