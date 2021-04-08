'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Loop all 3 modals- attach event listener- open modal
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
  });

// Close modal
closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
});
