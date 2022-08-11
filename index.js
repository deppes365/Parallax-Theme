'use strict'

// Variables
const menuBtn = document.querySelector('.mobile-menu-btn')
const navLinksContainer = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-link')
const wrapper = document.querySelector('.wrapper')
const navBar = document.querySelector('.nav-bar')

// Event Listeners
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinksContainer.classList.toggle('active')
})

navLinksContainer.addEventListener('click', (e) => {
    const clickedElement = e.target.classList;

    if(clickedElement.contains('active') && clickedElement.contains('nav-link')) {
        menuBtn.classList.toggle('active')
        navLinksContainer.classList.toggle('active')
        return
    } else if(!clickedElement.contains('active') && clickedElement.contains('nav-link')) {
        navLinks.forEach(link => {
            link.classList.remove('active')
        })

        e.target.classList.add('active')
        menuBtn.classList.toggle('active')
        navLinksContainer.classList.toggle('active')
    }
})

// If user clicks on the webpage while the mobile menu is open, this closes the menu
wrapper.addEventListener('click', () => {
    if(navLinksContainer.classList.contains('active')) {
        menuBtn.classList.toggle('active')
        navLinksContainer.classList.toggle('active')
    }
})

wrapper.addEventListener('scroll', () => {
    const scroll = wrapper.scrollTop;

    if(scroll >= 200) {
        navBar.classList.add('solid')
    } else if(navBar.classList.contains('solid') && scroll <= 200) {
        navBar.classList.remove('solid')
    }
})





