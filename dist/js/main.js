"use strict";
let menuLogo = document.querySelector('.lines');
let nav = document.querySelector('nav');
menuLogo.addEventListener('click', () => {
    menuLogo.classList.toggle('menuLogo');
    nav.classList.toggle("dispNone");
});
