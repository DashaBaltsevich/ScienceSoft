'use strict'
const burger = document.querySelector('.burger'),
    menu = document.querySelector('.right-menu__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('openMenu');
})