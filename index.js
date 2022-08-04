'use strict'

// Variables
const menuBtn = document.querySelector('.mobile-menu')

// Event Listeners
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
})