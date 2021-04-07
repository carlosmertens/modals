'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const closeMdal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Loop all 3 modals
for (let i = 0; i < showModal.length; i++)
  console.log(showModal[i].textContent);
