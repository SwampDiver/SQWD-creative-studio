// import '../scss/style.scss';
'use strict';
const mainMenu = document.querySelector ('.main-nav__list');
const menuButton = document.querySelector ('.toggle-button');
const logo = document.querySelector ('.page-header__logo');

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuButton.classList.toggle("toggle-button--open");
  mainMenu.classList.toggle("main-nav__list--open");
  logo.classList.toggle("page-header__logo--in-menu")
});
