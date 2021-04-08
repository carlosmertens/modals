'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Function to open model
const handleOpen = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close model
const handleClose = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open Model- Loop all modals
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', handleOpen);

// Close modal
closeModal.addEventListener('click', handleClose);
overlay.addEventListener('click', handleClose);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    handleClose();
  }
});
