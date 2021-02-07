
'use strict';


const mainNav = document.querySelector ('.main-nav')
const logo = document.querySelector ('.page-header__logo');
const menuButton = mainNav.querySelector ('.toggle-button');
const mainMenu = mainNav.querySelector ('.main-nav__list');

mainNav.classList.remove('main-nav--no-js');

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuButton.classList.toggle("toggle-button--open");
  mainMenu.classList.toggle("main-nav__list--open");
  logo.classList.toggle("page-header__logo--in-menu")
});
