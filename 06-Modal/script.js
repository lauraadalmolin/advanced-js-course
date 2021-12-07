'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (const node of btnsOpenModal) {
    node.addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});