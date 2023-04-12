'use strict';

const dice = document.querySelector('dice');
const player1 = document.querySelector('player1');
const btn = document.querySelector('btn');

function fxn() {
    console.log('hello world');
}

dice.src = `dice-${val}.jpg`;

document.getElementById(`current--${activePlayer}`);
document.getElementByClassName(`current--${activePlayer}`);

player1.classList.toggle('active');

btn.addEventListener('click', fxn);
