'use strict'

// Variables
const menuBtn = document.querySelector('.mobile-menu-btn')
const navLinksContainer = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-link')

// Event Listeners
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinksContainer.classList.toggle('active')
})

navLinksContainer.addEventListener('click', (e) => {
    const clickedElement = e.target.classList;

    if(clickedElement.contains('active')) {
        return
    } else if(!clickedElement.contains('active')) {
        navLinks.forEach(link => {
            link.classList.remove('active')
        })

        e.target.classList.add('active')
    }
})