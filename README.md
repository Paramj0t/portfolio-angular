'use strict';

const modal = document.querySelector('.modal');
const btnModal = document.querySelectorAll('.show-modal');

for(let i = 0; i < btnModal.length; i++) {
    console.log(btnModal[i].textContent);
    btnModal[i].addEventListener('click', function() {
        modal.classList.add('show-modal');
        modal.classList.remove('show-modal');

        modal.style.backgroundColor = 'red';
    })
}

document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if(e.key === 'Escape') {
        if(!modal.classList.contains('show-modal')) {

        }
    }
})
